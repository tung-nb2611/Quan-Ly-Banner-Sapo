package com.banner_management.backend.controller;
import java.util.List;
import java.util.NoSuchElementException;

import com.banner_management.backend.dto.BannerDto;
import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.BannerMappingEntity;
<<<<<<< HEAD
import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.entity.WebsiteEntity;
import com.banner_management.backend.service.BannerMappingService;
import com.banner_management.backend.service.BannerService;
import com.banner_management.backend.service.SectionService;
import com.banner_management.backend.service.WebsiteService;
=======
import com.banner_management.backend.service.BannerMappingService;
import com.banner_management.backend.service.BannerService;
>>>>>>> ffdc1ceeb71f17b32af0e6e9e2a3b673c16fd898
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class BannerController {

    @Autowired
    BannerService bannerService;

    @Autowired
    BannerMappingService bannerMappingService;
<<<<<<< HEAD

    @Autowired
    SectionService sectionService;

    @Autowired
    WebsiteService websiteService;
=======
>>>>>>> ffdc1ceeb71f17b32af0e6e9e2a3b673c16fd898

    // lấy một banner theo id
    @GetMapping("/banners")
    public List<BannerEntity> getListBanner(){
        return bannerService.listAllBanner();
    }

    // lấy một banner theo id
    @GetMapping("/banners/{id}")
    public ResponseEntity<BannerEntity> getBannerById(@PathVariable Integer id){
        try{
            BannerEntity bannerEntity = bannerService.getById(id);
            return new ResponseEntity<BannerEntity>(bannerEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // tạo mới một banner
    @PostMapping("/banners")
    public ResponseEntity<BannerEntity> addBanner(@RequestBody BannerDto bannerDto){
        try {
            System.out.println(" banner dto " + bannerDto);
            BannerEntity bannerEntity = new BannerEntity(bannerDto.getCode(), bannerDto.getName(), bannerDto.getImgUrl(),
                    bannerDto.getUserAdd(), bannerDto.getCreateAt(), bannerDto.getUrl());
            System.out.println("banner : " + bannerEntity);
            bannerService.save(bannerEntity);
            System.out.println("banner id : "+ bannerEntity.getId());
            BannerMappingEntity bannerMappingEntity = new BannerMappingEntity(bannerEntity.getId(),bannerDto.getSectionID(), (short) 1);
            System.out.println("banner mapping : " + bannerMappingEntity);
            bannerMappingService.save(bannerMappingEntity);
            return new ResponseEntity<BannerEntity>(bannerEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // cập nhật một banner theo id
    @PutMapping("/banners/{id}")
    public ResponseEntity<BannerEntity> updateBannerById (@RequestBody BannerEntity banner, @PathVariable Integer id){
        try{
            System.out.println("id: "+ id);
            System.out.println(banner);
            BannerEntity item = bannerService.getById(id);
            item.setCode(banner.getCode());
            item.setName(banner.getName());
            if(banner.getUrl() != null){
                item.setUrl(banner.getUrl());
            }
            if(banner.getImgUrl() != null){
                item.setImgUrl(banner.getImgUrl());
            }
            item.setUserFix(banner.getUserFix());
            item.setModifiedAt(banner.getModifiedAt());
            bannerService.save(item);
            return new ResponseEntity<BannerEntity>(banner, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Xoá một banner theo id
    @DeleteMapping("/banners/{id}")
    public ResponseEntity<BannerEntity> deleteBannerById(@PathVariable Integer id){
        try{
            bannerService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // Lay thong tin theo trang
    @GetMapping("/banners/page/{number}")
    public ResponseEntity<Page<BannerEntity>> getBannerPage(@PathVariable(value="number") int number){
        try{
            Page<BannerEntity> banners = bannerService.getBannerPage(number);
            return new ResponseEntity<>(banners, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/banners/rate/{sectionID}/{number}")
    public ResponseEntity<Page<BannerEntity>> getBannerStatusPage(@PathVariable("sectionID") int sectionId, @PathVariable("number") int number ){
        try{
            Page<BannerEntity> banners = bannerService.getBannerStatusPage(sectionId, number);
            return new ResponseEntity<>(banners, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
