package com.banner_management.backend.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import com.banner_management.backend.dto.BannerDto;
import com.banner_management.backend.dto.BannerInfoDto;
import com.banner_management.backend.dto.BannerMappingDto;
import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.BannerMappingEntity;
import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.entity.WebsiteEntity;
import com.banner_management.backend.service.BannerMappingService;
import com.banner_management.backend.service.BannerService;
import com.banner_management.backend.service.SectionService;
import com.banner_management.backend.service.WebsiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class BannerController {

    @Autowired
    BannerService bannerService;

    @Autowired
    BannerMappingService bannerMappingService;

    @Autowired
    SectionService sectionService;

    @Autowired
    WebsiteService websiteService;

    // lấy một banner theo id
    @GetMapping("/banners")
    public List<BannerEntity> getListBanner(){
        return bannerService.listAllBanner();
    }

    // api lọc banner theo website và khu vực
    @GetMapping("/banners/report/filter/bannerID={bannerID}")
    public List<BannerMappingDto> getListBannerGroupByWebsiteAndSection(@PathVariable("bannerID") @Valid int bannerID){

        List<BannerMappingDto> bannerMappingDtoList = new ArrayList<>();

        List<BannerMappingEntity> bannerMappingEntityList =  bannerMappingService.getListBannerByBannerID(bannerID);
        for (int i = 0 ; i < bannerMappingEntityList.size() ; i ++){
            BannerEntity bannerEntity = bannerService.getById(bannerMappingEntityList.get(i).getBannerID());
            SectionEntity sectionEntity = sectionService.getById(bannerMappingEntityList.get(i).getSectionID());
            WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());
            BannerMappingDto bannerMappingDto = new BannerMappingDto(
                    bannerEntity.getId(), bannerEntity.getName(), bannerEntity.getImgUrl(), bannerEntity.getUrl(),
                    bannerMappingEntityList.get(i).getNumberView(),bannerMappingEntityList.get(i).getNumberClick(),
                    bannerMappingEntityList.get(i).getSectionID(), websiteEntity.getName());
            bannerMappingDtoList.add(bannerMappingDto);
        }
        return bannerMappingDtoList;
    }
    @GetMapping("/banners/filter/sectionID={sectionID}")
    public List<BannerMappingDto> getListBannerByWebsiteAndSection(@PathVariable("sectionID") @Valid int sectionID){

        List<BannerMappingDto> bannerMappingDtoList = new ArrayList<>();

        List<BannerMappingEntity> bannerMappingEntityList =  bannerMappingService.getListBannerBySectionID(sectionID);
        for (int i = 0 ; i < bannerMappingEntityList.size() ; i ++){
            BannerEntity bannerEntity = bannerService.getById(bannerMappingEntityList.get(i).getBannerID());
            SectionEntity sectionEntity = sectionService.getById(bannerMappingEntityList.get(i).getSectionID());
            WebsiteEntity websiteEntity = websiteService.getById(sectionEntity.getWebId());
            BannerMappingDto bannerMappingDto = new BannerMappingDto(
                    bannerEntity.getId(), bannerEntity.getName(), bannerEntity.getImgUrl(), bannerEntity.getUrl(),
                    bannerMappingEntityList.get(i).getNumberView(),bannerMappingEntityList.get(i).getNumberClick(),
                    bannerMappingEntityList.get(i).getSectionID(), websiteEntity.getName());
            bannerMappingDtoList.add(bannerMappingDto);
        }
        return bannerMappingDtoList;
    }

    // lấy một banner theo id
    @GetMapping("/banners/{id}")
    public ResponseEntity<BannerEntity> getBannerById(@PathVariable @Valid Integer id){
        try{
            BannerEntity bannerEntity = bannerService.getById(id);
            return new ResponseEntity<BannerEntity>(bannerEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // tạo mới một banner
    @PostMapping("/banners")
    public ResponseEntity<BannerEntity> addBanner(@RequestBody @Valid BannerDto bannerDto){
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
    public ResponseEntity<BannerEntity> updateBannerById (@RequestBody @Valid BannerEntity banner, @PathVariable @Valid Integer id){
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
    public ResponseEntity<Page<BannerEntity>> getBannerPage(@PathVariable(value="number") @Valid int number){
        try{
            Page<BannerEntity> banners = bannerService.getBannerPage(number);
            return new ResponseEntity<>(banners, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/banners/page/user={userAdd}/{number}")
    public ResponseEntity<Page<BannerEntity>> getBannerByUserAdd(@PathVariable(value="userAdd") @Valid String userAdd, @PathVariable(value="number") @Valid int number){
        try{
            Page<BannerEntity> banners = bannerService.getBannerPageByUserAdd(userAdd, number);
            return new ResponseEntity<>(banners, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    

    @GetMapping("/banners/rate/{sectionID}/{number}")
    public ResponseEntity<Page<BannerEntity>> getBannerStatusPage(@PathVariable("sectionID") @Valid int sectionId, @PathVariable("number") @Valid int number ){
        try{
            Page<BannerEntity> banners = bannerService.getBannerStatusPage(sectionId, number);
            return new ResponseEntity<>(banners, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Lay thong tin banner
    @GetMapping("/banners/list/enabled/{sectionID}")
    public ResponseEntity<List<BannerEntity>> getBannerEnabledBySectionId(@PathVariable("sectionID") @Valid int sectionId ){
        try{
            List<BannerEntity> banners = bannerService.getBannerEnabledBySectionId(sectionId);
            return new ResponseEntity<>(banners, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Lay thong tin banner hidden
    @GetMapping("/banners/dto/hidden/{sectionID}")
    public ResponseEntity<List<BannerInfoDto>> getBannerHiddenBySectionId(@PathVariable("sectionID") @Valid int sectionId){
        try{
            List<BannerInfoDto> banners = bannerService.getBannerHidden(sectionId);
            return new ResponseEntity<>(banners, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/banners/dto/enabled/{sectionID}")
    public ResponseEntity<List<BannerInfoDto>> getBannerDtoEnabledBySectionId(@PathVariable("sectionID") @Valid int sectionId ){
        try{
            List<BannerInfoDto> banners = bannerService.getBannerEnabled(sectionId);
            return new ResponseEntity<>(banners, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
