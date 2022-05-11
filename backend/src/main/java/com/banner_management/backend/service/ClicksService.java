package com.banner_management.backend.service;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.ClicksEntity;
import com.banner_management.backend.repository.ClicksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ClicksService {

    @Autowired
    ClicksRepository clicksRepository;




    public  int getCountClickByBannerId (Integer bannerID)
    {
         return clicksRepository.getClickbybannerId(bannerID);
    }

    public  int getCountCLick (){
        return clicksRepository.getCountClick();
    }

    public List<ClicksEntity> getClick(){
        return clicksRepository.findAll();
    }

    public List<ClicksEntity> getClickInfoByBannerId(int bannerId){
        return clicksRepository.findClicksInfoByBannerID(bannerId);
    }

    public Page<ClicksEntity> getClickInfoPage(int bannerId,int number) {
        PagingAndSortingRepository<ClicksEntity, Integer> repository = clicksRepository;
        Page<ClicksEntity> clicks = ((ClicksRepository) repository).getClicksByBannerId(bannerId, PageRequest.of(number, 5));
        return clicks;
    }


    @Transactional
    public void save(ClicksEntity clicksEntity){
        clicksRepository.save(clicksEntity);
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
    }
}