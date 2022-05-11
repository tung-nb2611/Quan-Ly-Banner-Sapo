package com.banner_management.backend.service;

import com.banner_management.backend.entity.ViewEntity;
import com.banner_management.backend.repository.ViewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ViewService {

    @Autowired
    ViewsRepository viewsRepository;
//Lấy thông tin  views
    public List<ViewEntity> listViewsBanner(){
        return viewsRepository.findAll();
    }
// lấy views theo bannerId và Sections
    public ViewEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
        return viewsRepository.getByBannerIDAndSectionID(bannerID, sectionID);
    }

    //lấy views theo bnner id
    public List<ViewEntity> getByBannerID(Integer bannerID){
        return viewsRepository.getByBannerByID(bannerID);
    }
////lấy view và clicks
//    public  List<ViewsEntity>  getClicksAndViews() {
//return
//        viewsRepository.getViews();
//    }





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


    public int getViewsByBannerId(int bannerId){

        return viewsRepository.getViewsByBannerID(bannerId);
    }



}
