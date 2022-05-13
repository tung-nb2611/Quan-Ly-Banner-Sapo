package com.banner_management.backend.controller;

import com.banner_management.backend.entity.BannerMappingEntity;
import com.banner_management.backend.entity.ClickEntity;
import com.banner_management.backend.service.BannerMappingService;
import com.banner_management.backend.service.BannerService;
import com.banner_management.backend.service.ClickService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ClicksController {

    @Autowired
    ClickService clickService;
    @Autowired
    BannerMappingService bannerMappingService;


@GetMapping("/clicks-banner")
    public  List<ClickEntity> getAll(){
    return clickService.getAllClick();
}
////
////    @GetMapping("banners/click")
////    public List<ClicksEntity> getAllBannerClick(){
////        return clicksService.
////    }
//    @GetMapping("/clicks-banner")
//    public List<ClickEntity> getAllClick(){
//    return clicksService.getClick();
//}
//
//    // Lấy thông tin info click chuột theo từng banner
//    @GetMapping("/clicks-banner/info/{bannerID}")
//    public List<ClickEntity> getClickInfoByBannerId(@PathVariable("bannerID") int bannerId){
//        return clicksService.getClickInfoByBannerId(bannerId);
//    }
//
//    @GetMapping("/clicks-banner/info/{bannerID}/{page}")
//    public ResponseEntity<Page<ClickEntity>> getClickInfoByPage(@PathVariable("bannerID") int bannerId, @PathVariable("page") int page){
//        try {
//            Page<ClickEntity> clicks = clicksService.getClickInfoPage(bannerId, page);
//            return new ResponseEntity<>(clicks, HttpStatus.OK);
//        } catch(NoSuchElementException e){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @GetMapping("/clicks-banner/count")
//    public int getCountCLick(){
//        return clicksService.getCountCLick();
//    }
//
////    @GetMapping("/clicks-banner/count/{bannerID}")
////    public int getAllClickbyBannerId(@PathVariable("bannerID") int bannerID){
////        return clicksService.getCountClickByBannerId(bannerID);
////    }
//
    @PostMapping("/clicks-banner")
    public ResponseEntity<ClickEntity> updateClicksBanners (@RequestBody ClickEntity clickEntity) {
        try {
            System.out.println("du lieu lay ve : " + clickEntity);
            clickService.save(clickEntity);
            return new ResponseEntity<ClickEntity>(clickEntity, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/banners/clicks")
    public void updateClickBanner(@RequestBody ClickEntity clickEntity){
        System.out.println("check du lieu click nhan ve : "+ clickEntity);
        clickService.save(clickEntity);
        BannerMappingEntity bannerMappingEntity = bannerMappingService.getByBannerIDAndSectionID(clickEntity.getBannerId(), clickEntity.getSectionId());
        System.out.println("banner mapping lay ra: "+ bannerMappingEntity);
        int numberClick = bannerMappingEntity.getNumberClick();
        System.out.println("check number click :"+ numberClick);
        if(numberClick == 0){
            bannerMappingEntity.setNumberClick(1);
        }
        else {
            bannerMappingEntity.setNumberClick(numberClick + 1);

        }
        bannerMappingService.save(bannerMappingEntity);
    }

}
