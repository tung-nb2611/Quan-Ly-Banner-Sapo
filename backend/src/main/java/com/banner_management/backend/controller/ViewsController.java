package com.banner_management.backend.controller;

import com.banner_management.backend.entity.ViewEntity;
<<<<<<< HEAD
<<<<<<< HEAD
import com.banner_management.backend.service.ViewService;
=======
>>>>>>> 46b52ec208244197b799b99e415dc224194e1c51
=======
import com.banner_management.backend.service.ViewService;
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ViewsController {

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
    @Autowired
    ViewService viewService;

    @GetMapping("/banners/views")
    public List<ViewEntity> getAllViews (){
        return viewService.listViewsBanner();
    }

<<<<<<< HEAD
//    @GetMapping("/banners/{id}")
//    public ResponseEntity<BannerEntity> getBannerById(@PathVariable Integer id){
//        try{
//            BannerEntity bannerEntity = bannerService.getById(id);
//            return new ResponseEntity<BannerEntity>(bannerEntity, HttpStatus.OK);
//        }catch (NoSuchElementException e){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
=======
//    @Autowired
//    ViewsService viewsService;
//
//    @GetMapping("/banners/views")
//    public List<ViewEntity> getAllViews (){
//        return viewsService.listViewsBanner();
>>>>>>> 46b52ec208244197b799b99e415dc224194e1c51
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
<<<<<<< HEAD


=======
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
    // lay luot view cua banner dua theo khu vuc
    @GetMapping("/banners/views/{bannerID}")
    public List<ViewEntity> getViewsBannerByid(@PathVariable("bannerID") int bannerID){
        return viewService.getByBannerID(bannerID);
    }


<<<<<<< HEAD
// lay luot view cua banner dua theo khu vuc
=======
    // lay luot view cua banner dua theo khu vuc
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
    @GetMapping("/banners/views/{sectionID}/{bannerID}")
    public ViewEntity getViewsBannerInSection(@PathVariable("sectionID") int sectionID, @PathVariable("bannerID") int bannerID){
        return viewService.getByBannerIDAndSectionID(bannerID,sectionID);
    }


    @GetMapping("/banners/views/banner/{bannerId}")
    public int getViewsByBannerId(@PathVariable("bannerId") int bannerId){
<<<<<<< HEAD
            return viewService.getViewsByBannerId(bannerId);
    }
=======
>>>>>>> 46b52ec208244197b799b99e415dc224194e1c51

}
=======
        return viewService.getViewsByBannerId(bannerId);
    }

    //

    @PostMapping("/banners/views")
    public void insertViewBanner (@RequestBody ViewEntity viewEntity){
        viewService.save(viewEntity);
    }
}
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
