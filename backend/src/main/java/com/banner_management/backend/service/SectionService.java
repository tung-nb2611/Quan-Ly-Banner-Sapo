package com.banner_management.backend.service;


import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.repository.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class SectionService {

    @Autowired
    private SectionRepository sectionRepository;

    public List<SectionEntity> listSectionByWebsiteID(int webId) {
        return sectionRepository.getSectionEntitiesByWebsiteID(webId);
    }

    @Transactional
    public void save(SectionEntity sectionEntity) {
        sectionRepository.save(sectionEntity);
    }

    public SectionEntity getById(Integer id){
        return sectionRepository.findById(id).get();
    }

    @Transactional
    public void delete(Integer id){
        try {
            sectionRepository.deleteById(id);
        }catch (NoSuchElementException e){
        }
    }
}

