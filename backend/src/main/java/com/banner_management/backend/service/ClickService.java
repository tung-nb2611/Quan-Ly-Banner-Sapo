package com.banner_management.backend.service;

import com.banner_management.backend.entity.ClickEntity;
import com.banner_management.backend.repository.ClicksRepository;
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
<<<<<<< HEAD
    ClicksRepository clicksRepository;




    public  int getCountClickByBannerId (Integer bannerID)
    {
         return clicksRepository.getClickbybannerId(bannerID);
    }

    public  int getCountCLick (){
        return clicksRepository.getCountClick();
    }

    public List<ClickEntity> getClick(){
        return clicksRepository.findAll();
    }

    public List<ClickEntity> getClickInfoByBannerId(int bannerId){
        return clicksRepository.findClicksInfoByBannerID(bannerId);
    }

    public Page<ClickEntity> getClickInfoPage(int bannerId, int number) {
        PagingAndSortingRepository<ClickEntity, Integer> repository = clicksRepository;
        Page<ClickEntity> clicks = ((ClicksRepository) repository).getClicksByBannerId(bannerId, PageRequest.of(number, 5));
        return clicks;
    }


    @Transactional
    public void save(ClickEntity clickEntity){
        clicksRepository.save(clickEntity);
    }

    public int getClickCountByPreviousDay(Integer bannerId) {
        return clicksRepository.getClickCountPreviousDayByBannerId(bannerId);
    }

    public int getClickCountByPreviousWeek(Integer bannerId) {
        return clicksRepository.getClickCountPreviousWeekByBannerId(bannerId);
    }

    public int getClickCountByPreviousMonth(Integer bannerId) {
        return clicksRepository.getClickCountPreviousMonthByBannerId(bannerId);
    }

    public int getClickCountByPreviousYear(Integer bannerId) {
        return clicksRepository.getClickCountPreviousYearByBannerId(bannerId);
=======
    ClickRepository clickRepository;



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
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
    }
}
