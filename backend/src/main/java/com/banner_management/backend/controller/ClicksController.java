package com.banner_management.backend.controller;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.ClicksEntity;
import com.banner_management.backend.entity.ViewsEntity;
import com.banner_management.backend.service.ClicksService;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
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
    ClicksService clicksService;
//
//    @GetMapping("banners/click")
//    public List<ClicksEntity> getAllBannerClick(){
//        return clicksService.
//    }

    @PostMapping("/clicks-banner")
    public ResponseEntity<ClicksEntity> updateClicksBanners (@RequestBody ClicksEntity clicksEntity) {
        try {
            System.out.println("du lieu lay ve : "+ clicksEntity);
            clicksService.save(clicksEntity);
            return new ResponseEntity<ClicksEntity>(clicksEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
