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

    public List<ViewEntity> listViewsBanner(){
        return viewRepository.findAll();
    }
// lấy views theo bannerId và Sections

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



}
