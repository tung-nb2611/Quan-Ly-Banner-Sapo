package com.banner_management.backend.controller;

import com.banner_management.backend.entity.ViewEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ViewsController {

//    @Autowired
//    ViewsService viewsService;
//
//    @GetMapping("/banners/views")
//    public List<ViewEntity> getAllViews (){
//        return viewsService.listViewsBanner();
//    }
//
//    // lay luot view cua banner dua theo khu vuc
//    @GetMapping("/banners/views/{bannerID}")
//    public List<ViewEntity> getViewsBannerByid(@PathVariable("bannerID") int bannerID){
//        return viewsService.getByBannerID(bannerID);
//    }
//
//
//// lay luot view cua banner dua theo khu vuc
//    @GetMapping("/banners/views/{sectionID}/{bannerID}")
//    public ViewEntity getViewsBannerInSection(@PathVariable("sectionID") int sectionID, @PathVariable("bannerID") int bannerID){
//        return viewsService.getByBannerIDAndSectionID(bannerID,sectionID);
//    }
//
//
//    @GetMapping("/banners/views/banner/{bannerId}")
//    public int getViewsByBannerId(@PathVariable("bannerId") int bannerId){
//            return viewsService.getViewsByBannerId(bannerId);
//    }

}
