package com.banner_management.backend.service;

import com.banner_management.backend.entity.NumberClickEntity;
import com.banner_management.backend.entity.ViewsEntity;
import com.banner_management.backend.repository.NumberClickRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class NumberClickService {

    @Autowired
    NumberClickRepository numberClickRepository;

    public List<NumberClickEntity> listClickBanner(){
        return numberClickRepository.findAll();
    }

//     public NumberClickEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
//        return numberClickRepository.getByBannerIDAndSectionID(bannerID, sectionID);
//    }

    //getByBannerIDAndSectionIDAndCode
    public NumberClickEntity getByBannerIDAndSectionIDAndCode(Integer bannerID, Integer sectionID, Integer code){
        return numberClickRepository.getByBannerIDAndSectionIDAndCode(bannerID, sectionID, code);
    }
    @Transactional
    public void save(NumberClickEntity numberClickEntity){
        numberClickRepository.save(numberClickEntity);
    }

    public NumberClickEntity getById(Integer id){
        return numberClickRepository.findById(id).get();
    }

    @Transactional
    public void delete(Integer id){
        try {
            numberClickRepository.deleteById(id);
        }catch (NoSuchElementException e){
        }
    }

    public List<NumberClickEntity> getByBannerID(Integer bannerID){
        return numberClickRepository.getByBannerID(bannerID);
    }

}
