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

@Service
public class WebsiteService {

    @Autowired
    private WebsiteRepository WebsiteRepository;



    public List<WebsiteEntity> listSectionByUser_add(String user_add) {
        return WebsiteRepository.getSectionEntitiesByUser_add(user_add);
    }

    public Page<WebsiteEntity> getSectionPage(int number){
        PagingAndSortingRepository<WebsiteEntity, Integer> websiteRepo = WebsiteRepository;
        Page<WebsiteEntity> websites = ((WebsiteRepository) websiteRepo).getSectionByPage(PageRequest.of(number, 5));
        return websites;
    }

    public Page<WebsiteEntity> getSectionByPageAndUserAdd(String userAdd, int number){
        PagingAndSortingRepository<WebsiteEntity, Integer> sectionRepo = WebsiteRepository;
        Page<WebsiteEntity> sections = ((WebsiteRepository) sectionRepo).getSectionByPageAndUserAdd(userAdd, PageRequest.of(number, 5));
        return sections;
    }


    public WebsiteEntity getSectionById(int id) {
        return WebsiteRepository.findById(id).get();
    }

    @Transactional
    public void save(WebsiteEntity WebsiteEntity) {
        WebsiteRepository.save(WebsiteEntity);
    }

    @Transactional
    public void deleteSection(int id) {
        WebsiteRepository.deleteById(id);
    }

}
