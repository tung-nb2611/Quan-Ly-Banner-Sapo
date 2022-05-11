//
//package com.banner_management.backend.controller;
//
//
//import com.banner_management.backend.service.SectionService;
//import com.banner_management.backend.service.WebsiteService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@CrossOrigin(origins = "*")
//@RequestMapping("/api")
//
//public class WebsiteController {
//    @Autowired
//    private WebsiteService websiteService;
//
//    @GetMapping("/section_id={section_id}/sectors")
//    public List<WebsiteService> listSectors(@PathVariable("section_id") int section_id) {
//        return WebsiteService.listSectorsBySection_id(section_id);
//    }
//
//}
