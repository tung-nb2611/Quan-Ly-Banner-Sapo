package com.banner_management.backend.service;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.ViewsEntity;
import com.banner_management.backend.repository.ViewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@Service
public class ViewsService {

    @Autowired
    ViewsRepository viewsRepository;
//Lấy thông tin  views
    public List<ViewsEntity> listViewsBanner(){
        return viewsRepository.findAll();
    }
// lấy views theo bannerId và Sections
    public ViewsEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
        return viewsRepository.getByBannerIDAndSectionID(bannerID, sectionID);
    }

    //lấy views theo bnner id
    public List<ViewsEntity> getByBannerID(Integer bannerID){
        return viewsRepository.getByBannerByID(bannerID);
    }
////lấy view và clicks
//    public  List<ViewsEntity>  getClicksAndViews() {
//return
//        viewsRepository.getViews();
//    }





    @Transactional
    public void save(ViewsEntity viewsEntity){
        viewsRepository.save(viewsEntity);
    }

    public ViewsEntity getById(Integer id){
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
