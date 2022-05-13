
package com.banner_management.backend.controller;

import com.banner_management.backend.dto.BannerMappingDto;
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

//    //lấy thông tin banner-mapping theo bannerId
//    @GetMapping("/banner-mapping/{bannerId}")
//    public  List<BannerMappingEntity> getAllBybannerId(@PathVariable("bannerId") int bannerId){
//        return bannerMappingService.getAllByBannerId(bannerId);
//
//    }

//    @GetMapping("/banner-mapping/random/{sectionID}")
//
//
//    public BannerEntity randomBannerStatus(@PathVariable("sectionID") int sectionID) {
//        BannerMappingEntity bannerMappingEntity =  bannerMappingService.getRandomBannerBySectionID(sectionID);
//        System.out.println("banner mapping : "+ bannerMappingEntity);
//        BannerEntity bannerEntity = bannerService.getById(bannerMappingEntity.getBannerID());
//        System.out.println("banner entity : "+ bannerEntity);
//
//        if(bannerMappingEntity.getNumberView() == 0){
//            bannerMappingEntity.setNumberView(1);
//        }
//        else {
//            int countViews = bannerMappingEntity.getNumberView();
//            bannerMappingEntity.setNumberView(countViews + 1);
//        }
//        bannerMappingService.save(bannerMappingEntity);
//        System.out.println("banner random get ra :" + bannerEntity);
//        return bannerEntity;
//    }

    //  lấy random banner theo số lượng và khu vực
    @GetMapping("/banner-mapping/percentage/{sectionID}/{bannerID}")
    public BannerEntity listPercentageBannerStatus(@PathVariable("sectionID") int sectionID, @PathVariable("bannerID") int bannerID) {
        BannerMappingEntity bannerMappingEntity = bannerMappingService.getByBannerIDAndSectionID(bannerID, sectionID);
        System.out.println("kiem tra : "+ bannerMappingEntity);
        BannerEntity bannerEntity = bannerService.getById(bannerMappingEntity.getBannerID());
        System.out.println("data : "+ bannerEntity);
        return  bannerEntity;
    }





    // cap nhat du lieu thoi gian bat dau khi chon random
    @PutMapping("/banner-mapping/random/{id}")

    public void updateBannerStatus (@RequestBody BannerMappingEntity bannerMappingEntity, @PathVariable("id") Integer id){
        BannerMappingEntity existBannerMappingEntity = bannerMappingService.getById(id);
        System.out.println("banner status dau vao o day : "+ bannerMappingEntity);
        if(bannerMappingEntity.getSectionID() >= 0){
            existBannerMappingEntity.setSectionID(bannerMappingEntity.getSectionID());
        }
        bannerMappingService.save(existBannerMappingEntity);
    }

//     cap nhat du lieu khi chon hien thi theo ti trong






    @PutMapping("/banner-mapping/percentage")

    public void updateBannerStatusOnPercentage(@RequestBody List<BannerMappingEntity> bannerMappingEntityList){
        // du lieu can co bannerID, sectionID, percentage, timeDisplay, expired
        System.out.println("du lieu dau vao list : "+ bannerMappingEntityList);
        for(int i = 0; i < bannerMappingEntityList.size(); i++){
            BannerMappingEntity bannerMappingEntity = bannerMappingEntityList.get(i);
            System.out.println("phần tử "+ i + " "+ bannerMappingEntity);


            bannerMappingService.updatePercentage(bannerMappingEntity.getPercentage(), bannerMappingEntity.getBannerID(), bannerMappingEntity.getSectionID());







        }
    }

    @GetMapping("/banner-mapping/percentage/{websiteID}")
    public BannerMappingDto getImageUrlByPercentage(@PathVariable("websiteID") int sectionId){

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
        BannerMappingDto bannerMappingDto = new BannerMappingDto(
                bannerEntity.getId(), bannerEntity.getImgUrl(), bannerEntity.getUrl(),bannerMappingEntity.getSectionID() );
        System.out.println("banner Dto : "+ bannerMappingDto);
        return bannerMappingDto;
    }
}
>>>>>>> 46b52ec208244197b799b99e415dc224194e1c51
