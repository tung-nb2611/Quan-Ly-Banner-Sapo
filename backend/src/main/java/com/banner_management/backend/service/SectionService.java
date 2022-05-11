package com.banner_management.backend.service;


import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.repository.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectionService {

    @Autowired
    private SectionRepository sectionRepository;

    public List<SectionEntity> listSectorsBySection_id(int section_id) {
        return sectionRepository.getSectorEntitiesBySection_id(section_id);
    }

}

