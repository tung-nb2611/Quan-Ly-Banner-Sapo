package com.banner_management.backend.service;

import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.entity.SectorEntity;
import com.banner_management.backend.repository.SectionRepository;
import com.banner_management.backend.repository.SectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SectorService {

    @Autowired
    private SectorRepository sectorRepository;

    public List<SectorEntity> listSectorsBySection_id(int section_id) {
        return sectorRepository.getSectorEntitiesBySection_id(section_id);
    }

    public Page<SectorEntity> getSectorBySectionId(int sectorId, int number){
        PagingAndSortingRepository<SectorEntity, Integer> sectorRepo = sectorRepository;
        Page<SectorEntity> sectors = ((SectorRepository) sectorRepo).getSectorBySectionId(sectorId, PageRequest.of(number, 5));
        return sectors;
    }

}

