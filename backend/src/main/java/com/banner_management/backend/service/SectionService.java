package com.banner_management.backend.service;

import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.repository.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SectionService {

    @Autowired
    private SectionRepository sectionRepository;

    public List<SectionEntity> listSectionByUser_add(String user_add) {
        return sectionRepository.getSectionEntitiesByUser_add(user_add);
    }

    public List<SectionEntity> getAllSections(){
        return sectionRepository.findAll();
    }

    public Page<SectionEntity> getSectionPage(int number){
        PagingAndSortingRepository<SectionEntity, Integer> sectionRepo = sectionRepository;
        Page<SectionEntity> sections = ((SectionRepository) sectionRepo).getSectionByPage(PageRequest.of(number, 5));
        return sections;
    }

    public Page<SectionEntity> getSectionByPageAndUserAdd(String userAdd, int number){
        PagingAndSortingRepository<SectionEntity, Integer> sectionRepo = sectionRepository;
        Page<SectionEntity> sections = ((SectionRepository) sectionRepo).getSectionByPageAndUserAdd(userAdd, PageRequest.of(number, 5));
        return sections;
    }


    public SectionEntity getSectionById(int id) {
        return sectionRepository.findById(id).get();
    }

    @Transactional
    public void save(SectionEntity sectionEntity) {
        sectionRepository.save(sectionEntity);
    }

    @Transactional
    public void deleteSection(int id) {
        sectionRepository.deleteById(id);
    }

}
