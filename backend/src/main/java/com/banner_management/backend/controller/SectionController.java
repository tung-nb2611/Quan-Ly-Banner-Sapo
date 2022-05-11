package com.banner_management.backend.controller;

import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.service.SectionService;
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
public class SectionController {

    @Autowired
    private SectionService sectionService;

    @GetMapping("/sections/user={user_add}")
    public List<SectionEntity> listSection(@PathVariable("user_add") String user_add) {
        return sectionService.listSectionByUser_add(user_add);
    }

    @GetMapping("/sections/page/{page}")
    public ResponseEntity<Page<SectionEntity>> getSectionListByPage(@PathVariable("page") int page){
        try {
            Page<SectionEntity> sections = sectionService.getSectionPage(page);
            return new ResponseEntity<>(sections, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/sections/page/user={userAdd}/{page}")
    public ResponseEntity<Page<SectionEntity>> getSectionListByPageAndUserAdd(@PathVariable("userAdd") String userAdd,@PathVariable("page") int page){
        try {
            Page<SectionEntity> sections = sectionService.getSectionByPageAndUserAdd(userAdd, page);
            return new ResponseEntity<>(sections, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @GetMapping("/{position_web}/sections/{id}")
    public SectionEntity getSectionById( @PathVariable("id") int id,@PathVariable("position_web") String position_web) {
        return sectionService.getSectionById(id);
    }

    @PostMapping("/{position_web}/sections")
    public void addSection(@RequestBody SectionEntity sectionEntity, @PathVariable("position_web") String position_web) {
        sectionService.save(sectionEntity);
    }

    @PutMapping("/{position_web}/sections/{id}")
    public void updateSectionById(@RequestBody SectionEntity sectionEntity,@PathVariable("position_web") String position_web, @PathVariable("id") int id) {
        sectionEntity.setId(id);
        sectionService.save(sectionEntity);
    }

    @DeleteMapping("/{position_web}/sections/{id}")
    public void deleteSectionById(@PathVariable("position_web") String position_web, @PathVariable("id") int id) {
        sectionService.deleteSection(id);
    }
}
