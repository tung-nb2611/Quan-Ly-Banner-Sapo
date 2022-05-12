package com.banner_management.backend.controller;

import com.banner_management.backend.entity.ClickEntity;
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
            System.out.println("du lieu lay ve : "+ clickEntity);
            clickService.save(clickEntity);
            return new ResponseEntity<ClickEntity>(clickEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    @GetMapping("/clicks-banner/day/{bannerId}")
//    public int getClickCountPreviousDayByBannerId(@PathVariable("bannerId") Integer bannerId){
//        return clicksService.getClickCountByPreviousDay(bannerId);
//    }
//
//    @GetMapping("/clicks-banner/week/{bannerId}")
//    public int getClickCountPreviousWeekByBannerId(@PathVariable("bannerId") Integer bannerId){
//        return clicksService.getClickCountByPreviousWeek(bannerId);
//    }
//
//    @GetMapping("/clicks-banner/month/{bannerId}")
//    public int getClickCountPreviousMonthByBannerId(@PathVariable("bannerId") Integer bannerId){
//        return clicksService.getClickCountByPreviousMonth(bannerId);
//    }
//
//    @GetMapping("/clicks-banner/year/{bannerId}")
//    public int getClickCountPreviousYearByBannerId(@PathVariable("bannerId") Integer bannerId){
//        return clicksService.getClickCountByPreviousYear(bannerId);
//    }
}
