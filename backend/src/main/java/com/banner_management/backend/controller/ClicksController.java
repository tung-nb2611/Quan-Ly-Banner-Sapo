package com.banner_management.backend.controller;

import com.banner_management.backend.entity.BannerMappingEntity;
import com.banner_management.backend.entity.ClickEntity;
<<<<<<< HEAD

import com.banner_management.backend.service.ClickService;


=======
import com.banner_management.backend.service.BannerMappingService;
import com.banner_management.backend.service.BannerService;
import com.banner_management.backend.service.ClickService;
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
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

<<<<<<< HEAD

    @Autowired
    ClickService clickService;


    @GetMapping("/clicks-banner")
    public List<ClickEntity> getAllClick(){
    return clickService.getClick();
}

    // Lấy thông tin info click chuột theo từng banner
    @GetMapping("/clicks-banner/info/{bannerID}")
    public List<ClickEntity> getClickInfoByBannerId(@PathVariable("bannerID") int bannerId){
        return clickService.getClickInfoByBannerId(bannerId);
    }

    @GetMapping("/clicks-banner/info/{bannerID}/{page}")
    public ResponseEntity<Page<ClickEntity>> getClickInfoByPage(@PathVariable("bannerID") int bannerId, @PathVariable("page") int page){
        try {
            Page<ClickEntity> clicks = clickService.getClickInfoPage(bannerId, page);
            return new ResponseEntity<>(clicks, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/clicks-banner/count")
    public int getCountCLick(){
        return clickService.getCountCLick();
    }



=======
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
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
    @PostMapping("/clicks-banner")
    public ResponseEntity<ClickEntity> updateClicksBanners (@RequestBody ClickEntity clickEntity) {
        try {
            System.out.println("du lieu lay ve : " + clickEntity);
            clickService.save(clickEntity);
            return new ResponseEntity<ClickEntity>(clickEntity, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
<<<<<<< HEAD
        }
    }

=======
<<<<<<< HEAD
        }
    }

    @GetMapping("/clicks-banner/day/{bannerId}")
    public int getClickCountPreviousDayByBannerId(@PathVariable("bannerId") Integer bannerId){
        return clickService.getClickCountByPreviousDay(bannerId);
    }

    @GetMapping("/clicks-banner/week/{bannerId}")
    public int getClickCountPreviousWeekByBannerId(@PathVariable("bannerId") Integer bannerId){
        return clickService.getClickCountByPreviousWeek(bannerId);
    }

    @GetMapping("/clicks-banner/month/{bannerId}")
    public int getClickCountPreviousMonthByBannerId(@PathVariable("bannerId") Integer bannerId){
        return clickService.getClickCountByPreviousMonth(bannerId);
    }

    @GetMapping("/clicks-banner/year/{bannerId}")
    public int getClickCountPreviousYearByBannerId(@PathVariable("bannerId") Integer bannerId){
        return clickService.getClickCountByPreviousYear(bannerId);
=======
=======
    @Autowired
    BannerMappingService bannerMappingService;
>>>>>>> d6595a70b2439bff7d3a697097217eaa6608f583

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
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
    }

}
