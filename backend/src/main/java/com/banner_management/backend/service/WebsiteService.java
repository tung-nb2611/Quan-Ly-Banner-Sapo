package com.banner_management.backend.service;

import com.banner_management.backend.entity.WebsiteEntity;
import com.banner_management.backend.repository.WebsiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class WebsiteService {

    @Autowired
    private WebsiteRepository websiteRepository;


    public List<WebsiteEntity> getAllSections(){
        return websiteRepository.findAll();
    }




    public List<WebsiteEntity> listWebsiteByUserAdd(String userAdd) {
        return websiteRepository.getWebsiteEntitiesByUserAdd(userAdd);
    }

    public WebsiteEntity getWebNameByID(int websiteID){
        return websiteRepository.getById(websiteID);
    }

    public Page<WebsiteEntity> getSectionPage(int number){
        PagingAndSortingRepository<WebsiteEntity, Integer> websiteRepo = websiteRepository;
        Page<WebsiteEntity> websites = ((WebsiteRepository) websiteRepo).getWebsiteByPage(PageRequest.of(number, 5));
        return websites;
    }

    public Page<WebsiteEntity> getSectionByPageAndUserAdd(String userAdd, int number){
        PagingAndSortingRepository<WebsiteEntity, Integer> websiteRepo = websiteRepository;
        Page<WebsiteEntity> websites = ((WebsiteRepository) websiteRepo).getWebsiteByPageAndUserAdd(userAdd, PageRequest.of(number, 5));
        return websites;
    }


    @Transactional
    public void save(WebsiteEntity websiteEntity) {
        websiteRepository.save(websiteEntity);
    }

    public WebsiteEntity getById(Integer id){
        return websiteRepository.findById(id).get();
    }

    @Transactional
    public void delete(Integer id){
        try {
            websiteRepository.deleteById(id);
        }catch (NoSuchElementException e){

        }
    }
}
