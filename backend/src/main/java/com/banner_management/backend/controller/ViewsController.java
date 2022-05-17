package com.banner_management.backend.controller;

import com.banner_management.backend.entity.ViewEntity;
import com.banner_management.backend.service.ViewService;
import org.springdoc.core.converters.models.PageableAsQueryParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.sql.Date;
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
    public List<ViewEntity> getViewsBannerByid(@Valid  @PathVariable("bannerID") int bannerID){
        return viewService.getByBannerID(bannerID);
    }


// lay luot view cua banner dua theo khu vuc
    @GetMapping("/banners/views/{sectionID}/{bannerID}")
    public ViewEntity getViewsBannerInSection(@Valid @PathVariable("sectionID") int sectionID,@Valid @PathVariable("bannerID") int bannerID){
        return viewService.getByBannerIDAndSectionID(bannerID,sectionID);
    }


    @GetMapping("/banners/views/banner/{bannerId}")
    public int getViewsByBannerId(@Valid @PathVariable("bannerId") int bannerId){
            return viewService.getViewsByBannerId(bannerId);
    }

    @GetMapping("/banners/views/from-date={dateBegin}/to-date={dateEnd}")
    public int getList(@PathVariable("dateBegin") Date dateBegin, @PathVariable("dateEnd") Date dateEnd){
        return viewService.getNumberViewFromDayToDay(dateBegin, dateEnd);
    }


    @PostMapping("/banners/views")
    public void insertViewBanner (@Valid @RequestBody ViewEntity viewEntity){
        viewService.save(viewEntity);
    }


}
