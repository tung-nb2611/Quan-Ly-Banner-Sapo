package com.banner_management.backend.controller;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.BannerMappingEntity;
import com.banner_management.backend.service.BannerMappingService;
import com.banner_management.backend.service.BannerService;
import com.banner_management.backend.service.ViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class BannerMappingController {

    @Autowired
    private BannerMappingService bannerMappingService;

    @Autowired
    private BannerService bannerService;

    @Autowired
    private ViewService viewService;

    //  lấy random banner theo số lượng và khu vực
    @GetMapping("/banner-mapping/percentage/{sectionID}/{bannerID}")
    public BannerEntity listPercentageBannerStatus(@PathVariable("sectionID") int sectionID, @PathVariable("bannerID") int bannerID) {
        BannerMappingEntity bannerMappingEntity = bannerMappingService.getByBannerIDAndSectionID(bannerID, sectionID);
        System.out.println("kiem tra : "+ bannerMappingEntity);
        BannerEntity bannerEntity = bannerService.getById(bannerMappingEntity.getBannerID());
        System.out.println("data : "+ bannerEntity);
        return  bannerEntity;
    }

    //   cập nhật banner status .... chua su dung
    @PutMapping("/banner-status/random")
    public ResponseEntity<BannerMappingEntity> updateRandomBanner(@RequestBody BannerMappingEntity bannerMappingEntity) {
        System.out.println("bannerStatus : " + bannerMappingEntity);
        bannerMappingService.update(bannerMappingEntity.getTimeDisplay(), bannerMappingEntity.getSectionID());
        return  new ResponseEntity<BannerMappingEntity>(HttpStatus.OK);
    }

    // cap nhat du lieu thoi gian bat dau khi chon random
    @PutMapping("/banner-status/random/{id}")
    public void updateBannerStatus (@RequestBody BannerMappingEntity bannerMappingEntity, @PathVariable("id") Integer id){
        BannerMappingEntity existBannerMappingEntity = bannerMappingService.getById(id);
        System.out.println("banner status dau vao o day : "+ bannerMappingEntity);
        if(bannerMappingEntity.getSectionID() >= 0){
            existBannerMappingEntity.setSectionID(bannerMappingEntity.getSectionID());
        }
        bannerMappingService.save(existBannerMappingEntity);
    }

//     cap nhat du lieu khi chon hien thi theo ti trong
    @PutMapping("/banner-status/percentage")
    public void updateBannerStatusOnPercentage(@RequestBody List<BannerMappingEntity> bannerMappingEntityList){
        // du lieu can co bannerID, sectionID, percentage, timeDisplay, expired
        System.out.println("du lieu dau vao list : "+ bannerMappingEntityList);
        for(int i = 0; i < bannerMappingEntityList.size(); i++){
            BannerMappingEntity bannerMappingEntity = bannerMappingEntityList.get(i);
            System.out.println("phần tử "+ i + " "+ bannerMappingEntity);
            bannerMappingService.updatePercentage(bannerMappingEntity.getTimeDisplay(),
                    bannerMappingEntity.getPercentage(), bannerMappingEntity.getBannerID(), bannerMappingEntity.getSectionID());
        }
    }

    @GetMapping("/banner-mapping/percentage/{sectionId}")
    public BannerEntity getImageUrlByPercentage(@PathVariable("sectionId") int sectionId){

        BannerMappingEntity bannerMappingEntity =  bannerMappingService.getBannerByPercentage(sectionId);
        BannerEntity bannerEntity = bannerService.getById(bannerMappingEntity.getBannerID());
        if(bannerMappingEntity.getNumberView() == 0){
            bannerMappingEntity.setNumberView(1);
        }
        else {
            int countViews = bannerMappingEntity.getNumberView();
            bannerMappingEntity.setNumberView(countViews + 1);
        }
        bannerMappingService.save(bannerMappingEntity);
        return bannerEntity;
    }
}
