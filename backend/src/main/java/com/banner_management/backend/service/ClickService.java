package com.banner_management.backend.service;

import com.banner_management.backend.entity.ClickEntity;
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

<<<<<<< HEAD
=======
    public  List<ClickEntity> getAllClick (){
        return  clickRepository.getAllClick();
    }
//
//    public  int getCountClickByBannerId (Integer bannerID)
//    {
//        return clickRepository.getClickbybannerId(bannerID);
//    }
//
//    public  int getCountCLick (){
//        return clickRepository.getCountClick();
//    }
//
//    public List<ClickEntity> getClick(){
//        return clickRepository.findAll();
//    }
//
//    public List<ClickEntity> getClickInfoByBannerId(int bannerId){
//        return clickRepository.findClicksInfoByBannerID(bannerId);
//    }
//
//    public Page<ClickEntity> getClickInfoPage(int bannerId, int number) {
//        PagingAndSortingRepository<ClickEntity, Integer> repository = clickRepository;
//        Page<ClickEntity> clicks = ((ClickRepository) repository).getClicksByBannerId(bannerId, PageRequest.of(number, 5));
//        return clicks;
//    }
//
//
>>>>>>> ffdc1ceeb71f17b32af0e6e9e2a3b673c16fd898
    @Transactional
    public void save(ClickEntity clickEntity){
        clickRepository.save(clickEntity);
    }
<<<<<<< HEAD

    public int getSumClickBySectionIDForYear(int year, int sectionID){
        return clickRepository.getSumClickBySectionIDForYear(year, sectionID);
    }

    public int getSumClickBySectionIDForMonth(int year, int month , int sectionID){
        return clickRepository.getSumClickBySectionIDForMonth(year, month, sectionID);
    }

    public int getSumClickBySectionIDForDay(Date day , int sectionID){
        return clickRepository.getSumClickBySectionIDForDay(day, sectionID);
    }
=======
//
//    public int getClickCountByPreviousDay(Integer bannerId) {
//        return clickRepository.getClickCountPreviousDayByBannerId(bannerId);
//    }
//
//    public int getClickCountByPreviousWeek(Integer bannerId) {
//        return clickRepository.getClickCountPreviousWeekByBannerId(bannerId);
//    }
//
//    public int getClickCountByPreviousMonth(Integer bannerId) {
//        return clickRepository.getClickCountPreviousMonthByBannerId(bannerId);
//    }
//
//    public int getClickCountByPreviousYear(Integer bannerId) {
//        return clickRepository.getClickCountPreviousYearByBannerId(bannerId);
//    }
>>>>>>> ffdc1ceeb71f17b32af0e6e9e2a3b673c16fd898
}
