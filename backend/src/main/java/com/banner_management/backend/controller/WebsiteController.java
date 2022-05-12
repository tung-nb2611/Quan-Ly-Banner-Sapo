package com.banner_management.backend.controller;

import com.banner_management.backend.entity.WebsiteEntity;
import com.banner_management.backend.service.WebsiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class WebsiteController {

    @Autowired
    private WebsiteService websiteService;

    @GetMapping("/sections/user={user_add}")
    public List<WebsiteEntity> listSection(@PathVariable("user_add") String user_add) {
        return websiteService.listSectionByUser_add(user_add);
    }

    @GetMapping("/sections/page/{page}")
    public ResponseEntity<Page<WebsiteEntity>> getSectionListByPage(@PathVariable("page") int page){
        try {
            Page<WebsiteEntity> sections = websiteService.getSectionPage(page);
            return new ResponseEntity<>(sections, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/sections/page/user={userAdd}/{page}")
    public ResponseEntity<Page<WebsiteEntity>> getSectionListByPageAndUserAdd(@PathVariable("userAdd") String userAdd, @PathVariable("page") int page){
        try {
            Page<WebsiteEntity> sections = websiteService.getSectionByPageAndUserAdd(userAdd, page);
            return new ResponseEntity<>(sections, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @GetMapping("/{position_web}/sections/{id}")
    public WebsiteEntity getSectionById(@PathVariable("id") int id, @PathVariable("position_web") String position_web) {
        return websiteService.getSectionById(id);
    }

    @PostMapping("/{position_web}/sections")
    public void addSection(@RequestBody WebsiteEntity websiteEntity, @PathVariable("position_web") String position_web) {
        websiteService.save(websiteEntity);
    }

    @PutMapping("/{position_web}/sections/{id}")
    public void updateSectionById(@RequestBody WebsiteEntity websiteEntity, @PathVariable("position_web") String position_web, @PathVariable("id") int id) {
        websiteEntity.setId(id);
        websiteService.save(websiteEntity);
    }

    @DeleteMapping("/{position_web}/sections/{id}")
    public void deleteSectionById(@PathVariable("position_web") String position_web, @PathVariable("id") int id) {
        websiteService.deleteSection(id);
    }
}
