package com.banner_management.backend.controller;

import com.banner_management.backend.dto.WebsiteDto;
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

    @GetMapping("/websites/user={userAdd}")
    public List<WebsiteEntity> listWebsite(@PathVariable("userAdd") String userAdd) {
        return websiteService.listWebsiteByUserAdd(userAdd);
    }

    @GetMapping("/websites/page/{page}")
    public ResponseEntity<Page<WebsiteEntity>> getSectionList(@PathVariable("page") int page){
        try {
            Page<WebsiteEntity> websites = websiteService.getSectionPage(page);
            return new ResponseEntity<>(websites, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/websites/page/user={userAdd}/{page}")
    public ResponseEntity<Page<WebsiteEntity>> getWebsiteListByPageAndUserAdd(@PathVariable("userAdd") String userAdd, @PathVariable("page") int page){
        try {
            Page<WebsiteEntity> websites = websiteService.getSectionByPageAndUserAdd(userAdd, page);
            return new ResponseEntity<>(websites, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/websites")
    public ResponseEntity<WebsiteEntity> addWebsite(@RequestBody WebsiteDto websiteDto){
        try {
            System.out.println(" website dto " + websiteDto);
            WebsiteEntity websiteEntity = new WebsiteEntity(websiteDto.getName(), websiteDto.getUrl(), websiteDto.getUserAdd(), websiteDto.getCode());
            System.out.println("website : " + websiteEntity);
            websiteService.save(websiteEntity);
            System.out.println("website id : "+ websiteEntity.getId());
            return new ResponseEntity<WebsiteEntity>(websiteEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/websites/{id}")
    public ResponseEntity<WebsiteEntity> updateWebsite (@RequestBody WebsiteEntity website, @PathVariable Integer id){
        try{
            System.out.println("id: "+ id);
            System.out.println(website);
            WebsiteEntity item = websiteService.getById(id);
            item.setCode(website.getCode());
            item.setName(website.getName());
            item.setUrl(website.getUrl());
            item.setUserAdd(website.getUserAdd());
            websiteService.save(item);
            return new ResponseEntity<WebsiteEntity>(item, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/websites/{id}")
    public ResponseEntity<WebsiteEntity> deleteWebsite(@PathVariable Integer id){
        try{
            websiteService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

<<<<<<< HEAD
    @GetMapping("/websites/all")
    public ResponseEntity<List<WebsiteEntity>> getAllSection(){
        try{
            List<WebsiteEntity> sections = websiteService.getAllSections();
            return new ResponseEntity<>(sections, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

=======
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
}
