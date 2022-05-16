package com.banner_management.backend.service;

import com.banner_management.backend.entity.ClickEntity;
import com.banner_management.backend.entity.ViewEntity;
import com.banner_management.backend.repository.ClickRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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

    public int getSumClickBySectionIDForMonth( int sectionID){
        return clickRepository.getSumClickBySectionIDForMonth(sectionID);
    }

    public int getSumClickByForMonth(int year, int month , int sectionID){
        return clickRepository.getSumClickByForMonth(year, month, sectionID);
    }
//lấy tổng lượng Clicks  tháng
    public int getSumClickByMonth(int year, int month ){
        return clickRepository.getSumClickByMonth(year, month  );
    }

    //lấy tổng lượt clicks theo banner Id
    public  List<ClickEntity> getSumClickbyBannerID(int bannerID){
        return  clickRepository.getAllClikByBannerByID(bannerID);
    }


//    public  int getSumClickBySectionIdForMonth(int sectionID){
//        return clickRepository.get
//    }

//    public int getSumClickBySectionIDForDay(Date day , int sectionID){
//        return clickRepository.getSumClickBySectionIDForDay(day, sectionID);
//    }
}
