package com.banner_management.backend.service;

import com.banner_management.backend.entity.ClicksEntity;
import com.banner_management.backend.entity.ViewsEntity;
import com.banner_management.backend.repository.ClicksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class ClicksService {

    @Autowired
    ClicksRepository clicksRepository;



    @Transactional
    public void save(ClicksEntity clicksEntity){
        clicksRepository.save(clicksEntity);
    }
}
