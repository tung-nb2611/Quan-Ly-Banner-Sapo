package com.banner_management.backend.service;

import com.banner_management.backend.entity.ViewEntity;
import com.banner_management.backend.repository.ViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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

=======
//Lấy thông tin  views
    public List<ViewEntity> listViewsBanner(){
        return viewRepository.findAll();
    }
// lấy views theo bannerId và Sections
>>>>>>> main
    public ViewEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
        return viewRepository.getByBannerIDAndSectionID(bannerID, sectionID);
    }

    //lấy views theo bnner id
    public List<ViewEntity> getByBannerID(Integer bannerID){
        return viewRepository.getByBannerByID(bannerID);
    }
<<<<<<< HEAD
=======
////lấy view và clicks
//    public  List<ViewsEntity>  getClicksAndViews() {
//return
//        viewsRepository.getViews();
//    }




>>>>>>> main

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

>>>>>>> main
        return viewRepository.getViewsByBannerID(bannerId);
    }



}
