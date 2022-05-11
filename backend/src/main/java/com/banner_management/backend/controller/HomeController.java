//package com.banner_management.backend.controller;
//
//import com.banner_management.backend.dto.ClickBannerDto;
//import com.banner_management.backend.entity.BannerEntity;
//import com.banner_management.backend.entity.NumberClickEntity;
//import com.banner_management.backend.entity.ViewEntity;
//import com.banner_management.backend.service.BannerService;
//import com.banner_management.backend.service.ViewService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//@CrossOrigin(origins = "*")
//@RequestMapping("/api")
//public class HomeController {
//
//    @Autowired
//    BannerService bannerService;
//
//    @Autowired
//    ViewService viewService;
//
//    @Autowired
//    NumberClickService numberClickService;
//
//        @GetMapping("/banners/repor0t")
//    public List<ClickBannerDto> getAll(){
//        List<ClickBannerDto> clickBannerDtoList = new ArrayList<>();
//        List<BannerEntity> bannerEntityList = bannerService.listAllBanner();
//        int numberViews = 0;
//        int numberClicks = 0;
//        for(int i = 0 ; i < bannerEntityList.size() ; i ++){
//            // lay so luong view
//            List<ViewEntity> viewEntityList = viewService.getByBannerID(bannerEntityList.get(i).getId());
//            if(viewEntityList.size() > 0){
//                for(int j = 0; j < viewEntityList.size() ; j ++){
//                    numberViews += viewEntityList.get(j).getNumber();
//                }
//            }
//            else {
//                numberViews = 0;
//            }
//
//            // lay ra so luong click
//
//            List<NumberClickEntity> numberClickEntityList = numberClickService.getByBannerID(bannerEntityList.get(i).getId());
//            if(numberClickEntityList.size() >0){
//                for(int k = 0 ; k < numberClickEntityList.size() ; k ++){
//                    numberClicks += numberClickEntityList.get(k).getNumber();
//                }
//            }
//            else {
//                numberClicks = 0;
//            }
//            ClickBannerDto clickBannerDto = new ClickBannerDto(bannerEntityList.get(i).getName(), numberViews, numberClicks);
//            clickBannerDtoList.add(clickBannerDto);
//        }
//
//        return clickBannerDtoList;
//    }
//}
