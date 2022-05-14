package com.banner_management.backend.controller;

import com.banner_management.backend.dto.ClickAndViewDto;
import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.entity.WebsiteEntity;
import com.banner_management.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ReportController {

    @Autowired
    BannerMappingService bannerMappingService;

    @Autowired
    SectionService sectionService;
    @Autowired
    BannerService bannerService;

    @Autowired
    WebsiteService websiteService;

    @Autowired
    ViewService viewService;

    @Autowired
    ClickService clickService;
    //lấy theo banner
    @GetMapping("/banners/report/click-and-view/bannerID={bannerID}")
    public  ClickAndViewDto getListSumClickAndViewByBannerID(@PathVariable("bannerID") int bannerID){
        int sumView = bannerMappingService.getSumViewInBannerTd(bannerID);
        int sumClick = bannerMappingService.getSumClickInBannerTd(bannerID);
        BannerEntity bannerEntity = bannerService.getById (bannerID);


        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(bannerID, sumClick, sumView);
        return clickAndViewDto;
    }



//lấy theo khu vực
    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}")
    public ClickAndViewDto getListSumClickAndViewBySectionID(@PathVariable("sectionID") int sectionID){

        int sumView = bannerMappingService.getSumViewInSectionID(sectionID);
        int sumClick = bannerMappingService.getSumClickInSectionID(sectionID);

        SectionEntity sectionEntity = sectionService.getById(sectionID);
        WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());


        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(
                websiteEntity.getName(), sectionID, sumClick, sumView);
        return clickAndViewDto;
    }
    //lấy thông tin  banner theo khu vực
    @GetMapping("/banners/report/click-and-view/{sectionID}/{bannerID}")
    public ClickAndViewDto getListSumClickAndViewBySectionID(@PathVariable("sectionID") int sectionID,@PathVariable("bannerID") int bannerID){

        int sumView = bannerMappingService.getSumViewInBannerBySectionId(bannerID,sectionID);
        int sumClick = bannerMappingService.getSumClickInBannerBySectionId(bannerID,sectionID);

        SectionEntity sectionEntity = sectionService.getById(sectionID);
        WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());
        BannerEntity bannerEntity = bannerService.getById (bannerID);


        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(
                websiteEntity.getName(), sectionID, sumClick, sumView, bannerID);
        return clickAndViewDto;
    }

    // api lay tong view va click theo nam theo khu vuc
    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}/year={year}")
    public ClickAndViewDto getListViewAndClickSortByYear(@PathVariable("year") int year, @PathVariable("sectionID") int sectionID){

        int sumView = viewService.getSumViewBySectionIDForYear(year, sectionID);
        int sumClick = clickService.getSumClickBySectionIDForYear(year, sectionID);

        SectionEntity sectionEntity = sectionService.getById(sectionID);
        WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());

        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(
                websiteEntity.getName(), sectionID, sumClick, sumView);
        return clickAndViewDto;
    }

    // api lay tong view va click theo tháng theo khu vuc
    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}/year={year}/month={month}")
    public ClickAndViewDto getListViewAndClickSortByMonth(@PathVariable("month") int month, @PathVariable("year") int year, @PathVariable("sectionID") int sectionID){

        int sumView = viewService.getSumViewBySectionIDForMonth(year, month, sectionID);
        int sumClick = clickService.getSumClickBySectionIDForMonth(year, month, sectionID);

        SectionEntity sectionEntity = sectionService.getById(sectionID);
        WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());

        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(
                websiteEntity.getName(), sectionID, sumClick, sumView);
        return clickAndViewDto;
    }

//    // api lay tong view va click theo ngày theo khu vuc
//    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}/date={date}")
//    public ClickAndViewDto getListViewAndClickSortByDay(@PathVariable("date") Date date, @PathVariable("sectionID") int sectionID){
//
//        int sumView = viewService.getSumViewBySectionIDForDay(date, sectionID);
//        int sumClick = clickService.getSumClickBySectionIDForDay(date, sectionID);
//
//        SectionEntity sectionEntity = sectionService.getById(sectionID);
//        WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());
//
//        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(
//                websiteEntity.getName(), sectionID, sumClick, sumView);
//        return clickAndViewDto;
//    }
}
