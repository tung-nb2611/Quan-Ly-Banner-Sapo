package com.banner_management.backend.controller;

import com.banner_management.backend.dto.ClickAndViewDto;
import com.banner_management.backend.entity.*;
import com.banner_management.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Date;
import java.util.ArrayList;
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
    public  ClickAndViewDto getListSumClickAndViewByBannerID(@Valid  @PathVariable("bannerID") int bannerID){
        int sumView = bannerMappingService.getSumViewInBannerTd(bannerID);
        int sumClick = bannerMappingService.getSumClickInBannerTd(bannerID);
        BannerEntity bannerEntity = bannerService.getById (bannerID);
        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(bannerID, sumClick, sumView);
        return clickAndViewDto;
    }

//lấy theo khu vực
    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}")
    public ClickAndViewDto getListSumClickAndViewBySectionID(@Valid @PathVariable("sectionID") int sectionID){

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
    public ClickAndViewDto getListSumClickAndViewBySectionID(@Valid @PathVariable("sectionID") int sectionID,@Valid @PathVariable("bannerID") int bannerID){

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
    public ClickAndViewDto getListViewAndClickSortByYear(@Valid @PathVariable("year") int year,@Valid @PathVariable("sectionID") int sectionID){

        int sumView = viewService.getSumViewBySectionIDForYear(year, sectionID);
        int sumClick = clickService.getSumClickBySectionIDForYear(year, sectionID);

        SectionEntity sectionEntity = sectionService.getById(sectionID);
        WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());

        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(
                websiteEntity.getName(), sectionID, sumClick, sumView,year);
        return clickAndViewDto;
    }


    //lay api theo tung thang trong nam theo khu vuc
    // api lay tong view va click theo nam theo khu vuc
    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}/year={year}/statics")
    public List<ClickAndViewDto> getListViewAndClickSortByMonth(@Valid @PathVariable("year") int year,@Valid @PathVariable("sectionID") int sectionID){

        List<ClickAndViewDto> clickAndViewDtoList = new ArrayList<>();
    for (int i = 1 ; i <= 12 ; i ++){
        ClickAndViewDto clickAndViewDto = getListViewAndClickSortByMonth(i, year, sectionID);
        clickAndViewDtoList.add(clickAndViewDto);
    }
        return clickAndViewDtoList;
    }


//    // api lay tong view va click theo nam theo khu vuc
//    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}")
//    public ClickAndViewDto getListViewAndClickSortByMount( @PathVariable("sectionID") int sectionID){
//
//        int sumView = viewService.getSumViewBySectionIDForMonth( sectionID);
//        int sumClick = clickService.getSumClickBySectionIDForMonth( sectionID);

//        string month = viewService.getSumViewBySectionIDForMonth(sectionID);

//       ViewEntity viewEntity = viewService.getListMonth(viewService.getTimeView());

//
//        SectionEntity sectionEntity = sectionService.getById(sectionID);
//
//
//
//        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(sectionID, sumClick, sumView, month);
//        return clickAndViewDto;
//    }


    // api lay tong view va click theo tháng theo khu vuc
    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}/year={year}/month={month}")
    public ClickAndViewDto getListViewAndClickSortByMonth(@Valid @PathVariable("month") int month,@Valid @PathVariable("year") int year,@Valid @PathVariable("sectionID") int sectionID){
        int sumView = viewService.getSumViewByForMonth(year, month, sectionID);
        int sumClick = clickService.getSumClickByForMonth(year, month, sectionID);

        SectionEntity sectionEntity = sectionService.getById(sectionID);
        WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());
        String monthName = "";
        switch (month){
            case 1:{
                monthName="Tháng một";
                break;
            }
            case 2:{
                monthName="Tháng hai";
                break;
            }
            case 3:{
                monthName="Tháng ba";
                break;
            }
            case 4:{
                monthName="Tháng bốn";
                break;
            }
            case 5:{
                monthName="Tháng năm";
                break;
            }
            case 6:{
                monthName="Tháng sáu";
                break;
            }
            case 7:{
                monthName="Tháng bảy";
                break;
            }
            case 8:{
                monthName="Tháng tám";
                break;
            }
            case 9:{
                monthName="Tháng chín";
                break;
            }
            case 10:{
                monthName="Tháng mười";
                break;
            }
            case 11:{
                monthName="Tháng mười một";
                break;
            }
            case 12:{
                monthName="Tháng mười hai";
                break;
            }

        }
        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(
                websiteEntity.getName(), sectionID, sumClick, sumView, monthName, year);
        System.out.println("dto : "+ clickAndViewDto);
        return clickAndViewDto;
    }

}
