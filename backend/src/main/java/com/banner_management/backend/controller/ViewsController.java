package com.banner_management.backend.controller;

import com.banner_management.backend.entity.ViewsEntity;
import com.banner_management.backend.service.ViewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ViewsController {

    @Autowired
    ViewsService viewsService;

    @GetMapping("/banners/views")
    public List<ViewsEntity> getAllViews (){
        return viewsService.listViewsBanner();
    }

// lay luot view cua banner dua theo khu vuc
    @GetMapping("/banners/views/{sectionID}/{bannerID}")
    public ViewsEntity getViewsBannerInSection(@PathVariable("sectionID") int sectionID, @PathVariable("bannerID") int bannerID){
        return viewsService.getByBannerIDAndSectionID(bannerID,sectionID);
    }
}
