package com.banner_management.backend.controller;

import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.BannerStatusEntity;
import com.banner_management.backend.entity.ViewsEntity;
import com.banner_management.backend.service.BannerService;
import com.banner_management.backend.service.BannerStatusService;
import com.banner_management.backend.service.ViewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class BannerStatusController {

    @Autowired
    private BannerStatusService bannerStatusService;

    @Autowired
    private BannerService bannerService;

    @Autowired
    private ViewsService viewsService;

    //  lấy random banner theo số lượng và khu vực
    @GetMapping("/banner-status/random/{sectionID}")
    public BannerEntity randomBannerStatus(@PathVariable("sectionID") int sectionID) {
        BannerStatusEntity bannerStatusEntity =  bannerStatusService.listBannerStatusViaRandom(sectionID);
        BannerEntity bannerEntity = bannerService.getById(bannerStatusEntity.getBannerID());

        // dang code o day
        ViewsEntity existViewsEntity = viewsService.getByBannerIDAndSectionID(bannerEntity.getId(), sectionID);
        if(existViewsEntity != null){
            int views = existViewsEntity.getNumber() + 1;
            existViewsEntity.setNumber(views);
            viewsService.save(existViewsEntity);
        }
        else {
            ViewsEntity viewsEntity = new ViewsEntity(bannerEntity.getId(), sectionID, 1);
            viewsService.save(viewsEntity);
        }
        System.out.println("banner random get ra :" + bannerEntity);
        return bannerEntity;
    }

    //  lấy random banner theo số lượng và khu vực
    @GetMapping("/banner-status/percentage/{sectionID}/{bannerID}")
    public BannerEntity listPercentageBannerStatus(@PathVariable("sectionID") int sectionID, @PathVariable("bannerID") int bannerID) {
        BannerStatusEntity bannerStatusEntity = bannerStatusService.getByBannerIDAndSectionID(bannerID, sectionID);
        System.out.println("kiem tra : "+ bannerStatusEntity);
        BannerEntity bannerEntity = bannerService.getById(bannerStatusEntity.getBannerID());
        System.out.println("data : "+ bannerEntity);
        return  bannerEntity;
    }

    //   cập nhật banner status .... chua su dung
    @PutMapping("/banner-status/random")
    public ResponseEntity<BannerStatusEntity> updateRandomBanner(@RequestBody BannerStatusEntity bannerStatusEntity) {
        System.out.println("bannerStatus : " + bannerStatusEntity);
        bannerStatusService.update(bannerStatusEntity.getTimeDisplay(), bannerStatusEntity.getSectionID());
        return  new ResponseEntity<BannerStatusEntity>(HttpStatus.OK);
    }

    // cap nhat du lieu thoi gian bat dau khi chon random
    @PutMapping("/banner-status/random/{id}")
    public void updateBannerStatus (@RequestBody BannerStatusEntity bannerStatusEntity, @PathVariable("id") Integer id){
        BannerStatusEntity existBannerStatusEntity = bannerStatusService.getById(id);
        System.out.println("banner status dau vao o day : "+ bannerStatusEntity);
        if(bannerStatusEntity.getSectionID() >= 0){
            existBannerStatusEntity.setSectionID(bannerStatusEntity.getSectionID());
        }
        bannerStatusService.save(existBannerStatusEntity);
    }

//     cap nhat du lieu khi chon hien thi theo ti trong
    @PutMapping("/banner-status/percentage")
    public void updateBannerStatusOnPercentage(@RequestBody List<BannerStatusEntity> bannerStatusEntityList){
        // du lieu can co bannerID, sectionID, percentage, timeDisplay, expired
        System.out.println("du lieu dau vao list : "+ bannerStatusEntityList);
        for(int i = 0 ; i < bannerStatusEntityList.size(); i++){
            BannerStatusEntity bannerStatusEntity = bannerStatusEntityList.get(i);
            System.out.println("phần tử "+ i + " "+ bannerStatusEntity);
            bannerStatusService.updatePercentage(bannerStatusEntity.getTimeDisplay(),
                    bannerStatusEntity.getPercentage(), bannerStatusEntity.getBannerID(), bannerStatusEntity.getSectionID());
        }
    }

    // New:
    @GetMapping("/banner-status/percentage/{sectionId}")
    public String getImageUrlByPercentage(@PathVariable("sectionId") int sectionId){
        String imageUrl = bannerStatusService.getImageUrlByPercentage(sectionId);
        return imageUrl;
    }

    // New:
    @GetMapping("/banner-status/percents/{sectionId}")
    public String getImgUrlByPercentage(@PathVariable("sectionId") int sectionId){
        String imageUrl = bannerStatusService.getImgUrlByPercentage(sectionId);
        return imageUrl;
    }
}
