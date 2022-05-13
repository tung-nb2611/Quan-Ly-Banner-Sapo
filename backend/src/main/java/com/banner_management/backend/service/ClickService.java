package com.banner_management.backend.service;

import com.banner_management.backend.entity.ClickEntity;
import com.banner_management.backend.repository.ClickRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Date;
import java.util.List;

@Service
public class ClickService {

    @Autowired
    ClickRepository clickRepository;

    @Transactional
    public void save(ClickEntity clickEntity){
        clickRepository.save(clickEntity);
    }

    public int getSumClickBySectionIDForYear(int year, int sectionID){
        return clickRepository.getSumClickBySectionIDForYear(year, sectionID);
    }

    public int getSumClickBySectionIDForMonth(int year, int month , int sectionID){
        return clickRepository.getSumClickBySectionIDForMonth(year, month, sectionID);
    }

    public int getSumClickBySectionIDForDay(Date day , int sectionID){
        return clickRepository.getSumClickBySectionIDForDay(day, sectionID);
    }
}
