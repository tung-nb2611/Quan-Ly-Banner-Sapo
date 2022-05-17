package com.banner_management.backend.controller;

import com.banner_management.backend.dto.ClickAndViewDto;
import com.banner_management.backend.dto.ViewDto;
import com.banner_management.backend.entity.*;
import com.banner_management.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.Valid;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
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
                websiteEntity.getName(), sectionID, sumClick, sumView);
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


    // api lay tong view va click theo tháng

//    // api lay tong view va click theo nam theo khu vuc
//    @GetMapping("/banners/report/click-and-view/year={year}/statics")
//    public List<ClickAndViewDto> getListViewAndClickInMonth(@Valid @PathVariable("year") int year){
//
//        List<ClickAndViewDto> clickAndViewDtoList = new ArrayList<>();
//        for (int i = 1 ; i <= 12 ; i ++){
//            ClickAndViewDto clickAndViewDto = getListViewAndClickByMonth(i, year);
//            clickAndViewDtoList.add(clickAndViewDto);
//        }
//        return clickAndViewDtoList;
//    }
//    @GetMapping("/banners/report/click-and-view/year={year}/month={month}")
//    public ClickAndViewDto getListViewAndClickByMonth(@Valid @PathVariable("month") int month,@Valid @PathVariable("year") int year){
//        int sumView = viewService.getyear, month);
//        int sumClick = clickService.getSumClickByMonth(year, month);
//
//
//
//        String monthName = "";
//        switch (month){
//            case 1:{
//                monthName="Tháng một";
//                break;
//            }
//            case 2:{
//                monthName="Tháng hai";
//                break;
//            }
//            case 3:{
//                monthName="Tháng ba";
//                break;
//            }
//            case 4:{
//                monthName="Tháng bốn";
//                break;
//            }
//            case 5:{
//                monthName="Tháng năm";
//                break;
//            }
//            case 6:{
//                monthName="Tháng sáu";
//                break;
//            }
//            case 7:{
//                monthName="Tháng bảy";
//                break;
//            }
//            case 8:{
//                monthName="Tháng tám";
//                break;
//            }
//            case 9:{
//                monthName="Tháng chín";
//                break;
//            }
//            case 10:{
//                monthName="Tháng mười";
//                break;
//            }
//            case 11:{
//                monthName="Tháng mười một";
//                break;
//            }
//            case 12:{
//                monthName="Tháng mười hai";
//                break;
//            }
//
//        }
//        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(
//                 sumClick, sumView, monthName, year);
//        System.out.println("dto : "+ clickAndViewDto);
//        return clickAndViewDto;
//    }



    // api dem so luot view theo 1 thang cua website
    @GetMapping("/banners/views/statics/{year}/{month}")
    public HashMap<String, Integer> getDataFromViewDto (@PathVariable("year") Integer year, @PathVariable("month") Integer month){
       List<WebsiteEntity> websiteEntityList = websiteService.getAllWebsite();
        System.out.println("check list 1 :"+ websiteEntityList);
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        List<String> webName = new ArrayList<>();
        for(int i = 0 ; i < websiteEntityList.size() ; i++){
            WebsiteEntity websiteEntity = websiteService.getById(websiteEntityList.get(i).getId());
            webName.add(websiteEntity.getName());
            int numberView =  viewService.getViewNumberByWebSite(websiteEntity.getId(),year, month);
            map.put(websiteEntity.getName(), numberView);
        }
        System.out.println("hashmap :"+ map);
        System.out.println("key :"+ map.keySet());
        System.out.println("value :"+ map.values());
        return map;
    }

    //api lay thong tin view cua mot thang theo cua mot website

//    @GetMapping("/banners/views/statics/{websiteID}/{year}/{month}")
//    public ViewDto getDataViewByMonthInWebsiteID (@PathVariable("websiteID") int websiteID, @PathVariable("year") Integer year, @PathVariable("month") Integer month){
//        WebsiteEntity websiteEntity = websiteService.getById(websiteID);
//        int numberView =  viewService.getViewNumberByWebSite(websiteEntity.getId(),year, month);
//        String monthName = "";
//        switch (month){
//            case 1:{
//                monthName="Tháng một";
//                break;
//            }
//            case 2:{
//                monthName="Tháng hai";
//                break;
//            }
//            case 3:{
//                monthName="Tháng ba";
//                break;
//            }
//            case 4:{
//                monthName="Tháng bốn";
//                break;
//            }
//            case 5:{
//                monthName="Tháng năm";
//                break;
//            }
//            case 6:{
//                monthName="Tháng sáu";
//                break;
//            }
//            case 7:{
//                monthName="Tháng bảy";
//                break;
//            }
//            case 8:{
//                monthName="Tháng tám";
//                break;
//            }
//            case 9:{
//                monthName="Tháng chín";
//                break;
//            }
//            case 10:{
//                monthName="Tháng mười";
//                break;
//            }
//            case 11:{
//                monthName="Tháng mười một";
//                break;
//            }
//            case 12:{
//                monthName="Tháng mười hai";
//                break;
//            }
//
//        }
//        ViewDto viewDto = new ViewDto(websiteEntity.getName(), numberView, monthName);
//        return viewDto;
//    }
    //api lay thong tin view cua 12 thang theo cua mot website
//    @GetMapping("/banners/views/statics/websiteID={websiteID}/{year}")
//    public List<ViewDto> getDataViewInWebsiteID (@PathVariable("websiteID") int websiteID, @PathVariable("year") Integer year){
//       List<ViewDto> viewDtoList = new ArrayList<>();
//       for(int i = 1 ; i <= 12 ; i++){
//           ViewDto newViewDto = getDataViewByMonthInWebsiteID(websiteID, year, i);
//           viewDtoList.add((newViewDto));
//       }
//       return viewDtoList;
//    }

    // api dem luot view theo 12 thang cua tung website
    @GetMapping("/banners/views/statics/year={year}")
    public List<ViewDto> getWebViewSortByYear(@PathVariable("year") int year){
        List<ViewDto> viewDtoList = new ArrayList<>();
        for(int i = 1 ; i <= 12 ; i++){
            HashMap<String, Integer> newMap = getDataFromViewDto(year, i);
            String month = null;
//            switch (i){
//                case 1:{
//                    month="Tháng 1";
//                    break;
//                }
//                case 2:{
//                    month="Tháng 2";
//                    break;
//                }
//                case 3:{
//                    month="Tháng 3";
//                    break;
//                }
//                case 4:{
//                    month="Tháng 4";
//                    break;
//                }
//                case 5:{
//                    month="Tháng 5";
//                    break;
//                }
//                case 6:{
//                    month="Tháng 6";
//                    break;
//                }
//                case 7:{
//                    month="Tháng 7";
//                    break;
//                }
//                case 8:{
//                    month="Tháng 8";
//                    break;
//                }
//                case 9:{
//                    month="Tháng 9";
//                    break;
//                }
//                case 10:{
//                    month="Tháng 10";
//                    break;
//                }
//                case 11:{
//                    month="Tháng 11";
//                    break;
//                }
//                case 12:{
//                    month="Tháng 12";
//                    break;
//                }
//            }
//            ViewDto viewDto = new ViewDto(newMap, month);
//            viewDtoList.add(viewDto);
        }
        return viewDtoList;
    }

    // api tra ve các section co trong mot website
    @GetMapping("/banners/views/static/website={websiteID}/year={year}/month={month}")
    public HashMap<String, Integer> getWebViewSortByWebSiteAndMonth(@PathVariable("websiteID") int websiteID, @PathVariable("month") int month, @PathVariable("year") int year){
        List<SectionEntity> sectionEntityList = sectionService.listSectionByWebsiteID(websiteID);
        System.out.println("check list 10 :"+ sectionEntityList);
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        List<String> divName = new ArrayList<>();
        for(int i = 0 ; i < sectionEntityList.size() ; i++){
            divName.add(sectionEntityList.get(i).getDivId());
            int numberView =  viewService.getViewNumberByWebsiteAndSectionID(websiteID,sectionEntityList.get(i).getId(),year, month);
            map.put(sectionEntityList.get(i).getDivId(), numberView);
        }
        return map;
    }

    @GetMapping("/banners/views/static/website={websiteID}/year={year}")
    public List<ViewDto> getWebViewSortByWebSite(@PathVariable("websiteID") int websiteID, @PathVariable("year") int year){
        List<ViewDto> viewDtoList = new ArrayList<>();
        for(int i = 1 ; i <= 12 ; i++){
            HashMap<String, Integer> newMap = getWebViewSortByWebSiteAndMonth(websiteID, i, year);
            String month = null;
            switch (i){
                case 1:{
                    month="Tháng 1";
                    break;
                }
                case 2:{
                    month="Tháng 2";
                    break;
                }
                case 3:{
                    month="Tháng 3";
                    break;
                }
                case 4:{
                    month="Tháng 4";
                    break;
                }
                case 5:{
                    month="Tháng 5";
                    break;
                }
                case 6:{
                    month="Tháng 6";
                    break;
                }
                case 7:{
                    month="Tháng 7";
                    break;
                }
                case 8:{
                    month="Tháng 8";
                    break;
                }
                case 9:{
                    month="Tháng 9";
                    break;
                }
                case 10:{
                    month="Tháng 10";
                    break;
                }
                case 11:{
                    month="Tháng 11";
                    break;
                }
                case 12:{
                    month="Tháng 12";
                    break;
                }
            }
//            ViewDto viewDto = new ViewDto(newMap, month);
//            viewDtoList.add(viewDto);
        }
        return viewDtoList;
    }

    // api lay tong view va click theo ngày theo khu vuc trong 1 ngay
    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}/date={date}")
    public ClickAndViewDto getListViewAndClickSortByDay(@Valid @PathVariable("date") Date date, @Valid @PathVariable("sectionID") int sectionID){
        String[] time = date.toString().split("-");
        int sumView = viewService.getSumViewBySectionIDForDay( date, sectionID);
        int sumClick = clickService.getSumClickBySectionIDForDay(date, sectionID);
        SectionEntity sectionEntity = sectionService.getById(sectionID);
        WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());

        String dayOfMonth = time[2] + "/" + time[1];
        int year = Integer.parseInt(time[0]);
        ClickAndViewDto clickAndViewDto = new ClickAndViewDto(
                websiteEntity.getName(), sectionID, sumClick, sumView, year, time[1], dayOfMonth);
        return clickAndViewDto;
    }
    // api lay tong view va click theo ngày theo khu vuc trong 1 thang
    @GetMapping("/banners/report/click-and-view/sectionID={sectionID}/year={year}/month={month}/statics")
    public List<ClickAndViewDto> getListViewAndClickByMonth(@Valid @PathVariable("year") int year, @Valid @PathVariable("month") int month, @Valid @PathVariable("sectionID") int sectionID){
        List<ClickAndViewDto> clickAndViewDtoList = new ArrayList<>();
        int numberDay ;
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    numberDay = 29;
                } else {
                    numberDay = 28;
                }
            } else {
                numberDay = 29;
            }
        } else {
            numberDay = 28;
        }
        if(month == 2){
            numberDay = 28;
        }
        if(month == 1 || month == 3 ||  month == 5 ||  month == 7 ||  month == 8||  month == 10 ||  month == 12){
            numberDay = 31;
        }
        if(month == 4 || month == 6 ||  month == 9 ||  month == 11){
            numberDay = 30;
        }

        for (int i = 1 ; i <= numberDay ; i ++){
            String timeTemp = null;
            if(month < 10){
                if(i<10){
                    timeTemp = year + "-0" + month +"-0"+ i;
                }
                else {
                    timeTemp = year + "-0" + month +"-"+ i;
                }
            }
            else if(month > 10){
                if(i<10){
                    timeTemp = year + "-" + month +"-0"+ i;
                }
                else {
                    timeTemp = year + "-" + month +"-"+ i;
                }
            }

            LocalDate localDate = LocalDate.parse(timeTemp);
            Date date = Date.valueOf(localDate);
            System.out.println("day : "+ Date.valueOf(localDate));
            ClickAndViewDto clickAndViewDto = getListViewAndClickSortByDay(date, sectionID);
            clickAndViewDtoList.add(clickAndViewDto);
        }
        return clickAndViewDtoList;
    }


        //api lấy tên website và số lượng view trong một tháng
        @GetMapping("/banners/reports/statics/view/year={year}/month={month}")
        public ViewDto getData1(@PathVariable("year") int year, @PathVariable("month") int month){
            // lay ra tat ca cac website dang co
            List<WebsiteEntity> websiteEntityList = websiteService.getAllWebsite();
            List<HashMap<String, Object>> viewDtoList = new ArrayList<>();
            for(int i = 0 ; i< websiteEntityList.size() ; i ++){
                String webName = websiteEntityList.get(i).getName();
                int numberView = viewService.getViewNumberByWebSite(websiteEntityList.get(i).getId(), year, month);
                HashMap<String, Object> newMap = new HashMap<>();
                newMap.put("webName", webName);
                newMap.put("numberView", numberView);
                viewDtoList.add(newMap);
            }
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
            ViewDto viewDto = new ViewDto(viewDtoList, monthName);
        return  viewDto;
    }

        //api lay ten website va so luong view trong mot nam
        @GetMapping("/banners/reports/statics/view/year={year}")
        public List<ViewDto> getData2(@PathVariable("year") int year){
            List<ViewDto> viewDtoList = new ArrayList<>();
            for(int i = 1 ; i <= 12 ; i++){
                ViewDto viewDto = getData1(year, i);
                viewDtoList.add(viewDto);
            }
            return viewDtoList;
        }

}
