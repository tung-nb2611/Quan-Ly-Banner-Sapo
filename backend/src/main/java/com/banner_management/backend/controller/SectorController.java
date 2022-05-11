package com.banner_management.backend.controller;

import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.entity.SectorEntity;
import com.banner_management.backend.service.SectorService;
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
public class SectorController {

    @Autowired
    private SectorService sectorService;

    @GetMapping("/section_id={section_id}/sectors")
    public List<SectorEntity> listSectors(@PathVariable("section_id") int section_id) {
        return sectorService.listSectorsBySection_id(section_id);
    }

    @GetMapping("/sectors/page/{sectionId}/{page}")
    public ResponseEntity<Page<SectorEntity>> getSectorBySectionId(@PathVariable("sectionId") int sectionId, @PathVariable("page") int page){
        try {
            Page<SectorEntity> sectors = sectorService.getSectorBySectionId(sectionId, page);
            return new ResponseEntity<>(sectors, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}