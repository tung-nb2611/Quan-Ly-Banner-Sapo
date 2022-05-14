package com.banner_management.backend.service;

import com.banner_management.backend.entity.ViewEntity;
import com.banner_management.backend.repository.ViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return viewRepository.getByBannerByID(bannerID);
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

<<<<<<< HEAD
    public int getSumViewBySectionIDForMonth( int sectionID){
        return viewRepository.getSumViewBySectionIDForMonth(sectionID);
    }

//    public int getSumViewBySectionIDForDay(Date day , int sectionID){
//        return viewRepository.getSumViewBySectionIDForDay(day, sectionID);
//    }
=======
    public int getSumViewBySectionIDForMonth(int year, int month , int sectionID){
        return viewRepository.getSumViewBySectionIDForMonth(year, month, sectionID);
    }

    public int getSumViewBySectionIDForDay(Date day , int sectionID){
        return viewRepository.getSumViewBySectionIDForDay(day, sectionID);
    }
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
}
