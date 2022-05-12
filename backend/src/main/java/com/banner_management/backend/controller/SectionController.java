package com.banner_management.backend.controller;

import com.banner_management.backend.entity.SectionEntity;
import com.banner_management.backend.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class SectionController {

    @Autowired
    private SectionService sectionService;

    @GetMapping("/web_id={web_id}/sections")
    public List<SectionEntity> listSectors(@PathVariable("web_id") int web_id) {
        return sectionService.listSectorsBySection_id(web_id);
    }

}