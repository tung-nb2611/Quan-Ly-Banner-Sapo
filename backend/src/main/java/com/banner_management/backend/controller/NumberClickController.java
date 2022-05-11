//package com.banner_management.backend.controller;
//
//import com.banner_management.backend.entity.NumberClickEntity;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@CrossOrigin(origins = "*")
//@RequestMapping("/api")
//public class NumberClickController {
//
//    @Autowired
//    NumberClickService numberClickService;
//
//    @GetMapping("/banners/clicks")
//    public List<NumberClickEntity> getAllClicks (){
//        return numberClickService.listClickBanner();
//    }
//
//    // lay luot view cua banner dua theo khu vuc
//    @GetMapping("/banners/clicks/{sectionID}/{bannerID}/{code}")
//    public NumberClickEntity getClickBannerInSection(@PathVariable("sectionID") int sectionID, @PathVariable("bannerID") int bannerID,
//                                                     @PathVariable("code")int code){
//        return numberClickService.getByBannerIDAndSectionIDAndCode(bannerID,sectionID, code);
//    }
//
//    @PostMapping("/banners/clicks")
//    public void updateClickBanner(@RequestBody NumberClickEntity numberClickEntity){
//        System.out.println("check du lieu click nhan ve : "+ numberClickEntity);
//
//        NumberClickEntity existNumberClickEntity = numberClickService.getByBannerIDAndSectionIDAndCode(
//                numberClickEntity.getBannerID(), numberClickEntity.getSectionID(), numberClickEntity.getCode());
//        if(existNumberClickEntity != null){
//            int click = existNumberClickEntity.getNumber() + 1;
//            existNumberClickEntity.setNumber(click);
//            numberClickService.save(existNumberClickEntity);
//        }
//        else {
//            NumberClickEntity newNumberClickEntity = new NumberClickEntity(numberClickEntity.getCode(), numberClickEntity.getBannerID(), numberClickEntity.getSectionID(), 1);
//            numberClickService.save(newNumberClickEntity);
//        }
//    }
//}
