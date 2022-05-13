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
