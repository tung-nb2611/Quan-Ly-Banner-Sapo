package com.banner_management.backend.service;

import com.banner_management.backend.entity.ClickEntity;
import com.banner_management.backend.entity.ViewEntity;
import com.banner_management.backend.repository.ViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.sql.Date;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ViewService {

    @Autowired
    ViewRepository viewRepository;


    public List<ViewEntity> listViewsBanner(){
        return viewRepository.findAll();
    }

    public ViewEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
        return viewRepository.getByBannerIDAndSectionID(bannerID, sectionID);
    }

    //lấy views theo bnner id
    public List<ViewEntity> getByBannerID(Integer bannerID){
        return viewRepository.getAllViewsByBannerByID(bannerID);
    }

    @Transactional
    public void save(ViewEntity viewsEntity){
        viewRepository.save(viewsEntity);
    }

    public ViewEntity getById(Integer id){
        return viewRepository.findById(id).get();
    }

    @Transactional
    public void delete(Integer id){
        try {
            viewRepository.deleteById(id);
        }catch (NoSuchElementException e){
        }
    }

    public int getViewsByBannerId(int bannerId){
        return viewRepository.getViewsByBannerID(bannerId);
    }

    public int getSumViewBySectionIDForYear(int year, int sectionID){
        return viewRepository.getSumViewBySectionIDForYear(year, sectionID);
    }


    public int getSumViewBySectionIDForMonth( int sectionID){
        return viewRepository.getSumViewBySectionIDForMonth(sectionID);
    }

    public int getSumViewByForMonth ( int year, int month, int sectionID){
        return viewRepository.getSumViewByForMonth(year, month, sectionID);

    }

    public Integer getViewNumberByWebSite(int websiteID, int year, int month){
        return viewRepository.getViewNumberByWebSite(websiteID, year, month);
    }

    public Integer getViewNumberByWebsiteAndSectionID(int websiteID, int sectionID, int year, int month){
        return viewRepository.getViewNumberByWebsiteAndSectionID(websiteID, sectionID, year, month);
    }


    public int getSumViewBySectionIDForDay(Date day , int sectionID){
        return viewRepository.getSumViewBySectionIDForDay(day, sectionID);
    }

    public int getNumberViewFromDayToDay(Date dateBegin, Date dateEnd){
       return viewRepository.getNumberViewFromDayToDay(dateBegin, dateEnd);
    }

    public int getNumberViewForDayByWebsite(Date date, int websiteID){
        return viewRepository.getNumberViewForDayByWebsite(date, websiteID);
    }
}
