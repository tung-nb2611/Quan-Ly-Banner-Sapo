package com.banner_management.backend.controller;

import com.banner_management.backend.entity.SectionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class SectorController {

//    @Autowired
//    private SectorService sectorService;
//
//    @GetMapping("/section_id={section_id}/sectors")
//    public List<SectionEntity> listSectors(@PathVariable("section_id") int section_id) {
//        return sectorService.listSectorsBySection_id(section_id);
//    }

}