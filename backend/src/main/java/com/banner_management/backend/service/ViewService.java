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



<<<<<<< HEAD



    public List<ViewEntity> listViewsBanner(){
        return viewRepository.findAll();
    }
// lấy views theo bannerId và Sections

=======
>>>>>>> a0fb9389283267b8426b0096bf281f0331995ba9
    public ViewEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
        return viewRepository.getByBannerIDAndSectionID(bannerID, sectionID);
    }

    //lấy views theo bnner id
    public List<ViewEntity> getByBannerID(Integer bannerID){
        return viewRepository.getByBannerByID(bannerID);
    }
<<<<<<< HEAD


////lấy view và clicks
//    public  List<ViewsEntity>  getClicksAndViews() {
//return
//        viewsRepository.getViews();
//    }





=======
>>>>>>> a0fb9389283267b8426b0096bf281f0331995ba9

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

<<<<<<< HEAD

    public int getViewsByBannerId(int bannerId){





=======
    public int getViewsByBannerId(int bannerId){
>>>>>>> a0fb9389283267b8426b0096bf281f0331995ba9
        return viewRepository.getViewsByBannerID(bannerId);
    }

    public int getSumViewBySectionIDForYear(int year, int sectionID){
        return viewRepository.getSumViewBySectionIDForYear(year, sectionID);
    }

    public int getSumViewBySectionIDForMonth(int year, int month , int sectionID){
        return viewRepository.getSumViewBySectionIDForMonth(year, month, sectionID);
    }

    public int getSumViewBySectionIDForDay(Date day , int sectionID){
        return viewRepository.getSumViewBySectionIDForDay(day, sectionID);
    }
}
