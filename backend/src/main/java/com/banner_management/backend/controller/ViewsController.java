package com.banner_management.backend.controller;

import com.banner_management.backend.entity.ViewEntity;
import com.banner_management.backend.service.ViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ViewsController {

    @Autowired
    ViewService viewService;

    @GetMapping("/banners/views")
    public List<ViewEntity> getAllViews (){
        return viewService.listViewsBanner();
    }

    // lay luot view cua banner dua theo khu vuc
    @GetMapping("/banners/views/{bannerID}")
    public List<ViewEntity> getViewsBannerByid(@PathVariable("bannerID") int bannerID){
        return viewService.getByBannerID(bannerID);
    }


// lay luot view cua banner dua theo khu vuc
    @GetMapping("/banners/views/{sectionID}/{bannerID}")
    public ViewEntity getViewsBannerInSection(@PathVariable("sectionID") int sectionID, @PathVariable("bannerID") int bannerID){
        return viewService.getByBannerIDAndSectionID(bannerID,sectionID);
    }


    @GetMapping("/banners/views/banner/{bannerId}")
    public int getViewsByBannerId(@PathVariable("bannerId") int bannerId){
            return viewService.getViewsByBannerId(bannerId);
    }

    //

    @PostMapping("/banners/views")
    public void insertViewBanner (@RequestBody ViewEntity viewEntity){
        System.out.println("body lay views : "+ viewEntity);
        viewService.save(viewEntity);
    }
}
