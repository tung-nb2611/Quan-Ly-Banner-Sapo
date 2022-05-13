package com.banner_management.backend.service;

import com.banner_management.backend.entity.ViewEntity;
import com.banner_management.backend.repository.ViewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Date;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ViewService {

    @Autowired
<<<<<<< HEAD
    ViewsRepository viewsRepository;
//Lấy thông tin  views
=======
    ViewRepository viewRepository;



<<<<<<< HEAD



>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
    public List<ViewEntity> listViewsBanner(){
        return viewsRepository.findAll();
    }
// lấy views theo bannerId và Sections

=======
>>>>>>> a0fb9389283267b8426b0096bf281f0331995ba9
    public ViewEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
        return viewsRepository.getByBannerIDAndSectionID(bannerID, sectionID);
    }

    //lấy views theo bnner id
    public List<ViewEntity> getByBannerID(Integer bannerID){
        return viewsRepository.getByBannerByID(bannerID);
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
    public void save(ViewEntity viewEntity){
        viewsRepository.save(viewEntity);
    }

    public ViewEntity getById(Integer id){
        return viewsRepository.findById(id).get();
    }

    @Transactional
    public void delete(Integer id){
        try {
            viewsRepository.deleteById(id);
        }catch (NoSuchElementException e){
        }
    }

<<<<<<< HEAD

    public int getViewsByBannerId(int bannerId){

<<<<<<< HEAD
        return viewsRepository.getViewsByBannerID(bannerId);
=======




=======
    public int getViewsByBannerId(int bannerId){
>>>>>>> a0fb9389283267b8426b0096bf281f0331995ba9
        return viewRepository.getViewsByBannerID(bannerId);
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
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
