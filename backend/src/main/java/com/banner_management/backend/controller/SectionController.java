package com.banner_management.backend.controller;

import com.banner_management.backend.dto.SectionDto;
import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class SectionController {

    @Autowired
    private SectionService sectionService;

    @GetMapping("/websiteID={websiteID}/sections")
    public List<SectionEntity> listSections(@PathVariable("websiteID") int webId) {
        return sectionService.listSectionByWebsiteID(webId);
    }

    @PostMapping("/sections")
    public ResponseEntity<SectionEntity> addSection(@RequestBody SectionDto sectionDto){
        try {
            System.out.println(" section dto " + sectionDto);
            SectionEntity sectionEntity = new SectionEntity( sectionDto.getWebId(),sectionDto.getDivId());
            System.out.println("section : " + sectionEntity);
            sectionService.save(sectionEntity);
            System.out.println("section id : "+ sectionEntity.getId());
            return new ResponseEntity<SectionEntity>(sectionEntity, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/sections/{id}")
    public ResponseEntity<SectionEntity> updateSection(@RequestBody SectionEntity section, @PathVariable Integer id){
        try{
            System.out.println("id: "+ id);
            System.out.println(section);
            SectionEntity item = sectionService.getById(id);
            item.setDivId(section.getDivId());
            item.setWebId(section.getWebId());
            sectionService.save(item);
            return new ResponseEntity<SectionEntity>(item, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/sections/{id}")
    public ResponseEntity<SectionEntity> deleteSection(@PathVariable Integer id){
        try{
            sectionService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}