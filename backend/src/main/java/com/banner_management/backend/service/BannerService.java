package com.banner_management.backend.service;
<<<<<<< HEAD
import java.util.ArrayList;
=======
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

<<<<<<< HEAD
import com.banner_management.backend.dto.BannerInfoDto;
import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.BannerMappingEntity;
import com.banner_management.backend.repository.BannerMappingRepository;
=======
import com.banner_management.backend.entity.BannerEntity;
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
import com.banner_management.backend.repository.BannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

@Service
public class BannerService  {

    @Autowired
    private BannerRepository repository;

<<<<<<< HEAD
    @Autowired
    private BannerMappingRepository bannerMappingRepository;

=======
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
    public List<BannerEntity> listAllBanner(){
        return repository.findAll();
    }

    //lấy chi tiết banner theo trang web và khu vực

    public List<BannerEntity> listBannerGroupByWebsiteAndSection(int bannerID){
        return repository.getBannerGroupByWebsiteAndSection(bannerID);
    }

    public List<BannerEntity> listBannerByWebsiteAndSection(int setionID){
        return repository.getBanneByWebsiteAndSection(setionID);
    }

    @Transactional
    public void save(BannerEntity bannerEntity){
        repository.save(bannerEntity);
    }

    public BannerEntity getById(Integer id){
        return repository.findById(id).get();
    }

    @Transactional
    public void delete(Integer id){
        try {
            repository.deleteById(id);
        }catch (NoSuchElementException e){

        }
    }
    public Page<BannerEntity> getBannerPage(int number) {
        PagingAndSortingRepository<BannerEntity, Integer> bannerRepository = repository;
        Page<BannerEntity> banners = bannerRepository.findAll(PageRequest.of(number, 8));
        return banners;
    }

    public Page<BannerEntity> getBannerStatusPage(int sectionId, int number){
        PagingAndSortingRepository<BannerEntity, Integer> bannerEntity = repository;
        Pageable pageNumber = PageRequest.of(number, 8);
        Page<BannerEntity> banners = repository.getBannerStatusBySections(sectionId, pageNumber);
        return banners;
    }

<<<<<<< HEAD
    // New
    public List<BannerEntity> getBannerEnabledBySectionId(int sectionId){
        List<BannerEntity> banners = repository.getBannerEnableBySectionId(sectionId);
        return banners;
    }

    // New
    public List<BannerEntity> getBannerHiddenBySectionId(int sectionId){
        List<BannerEntity> banners = repository.getBannerHiddenBySectionId(sectionId);
        return banners;
    }

    // Convert - điều kiện: 1 section có nhiều banner và ko banner nào lặp lại id (what?)
    public List<BannerInfoDto> getBannerEnabled(int sectionId){
        List<BannerEntity> bannersList = repository.getBannerEnableBySectionId(sectionId);
        List<BannerMappingEntity> bannerMappingsList = bannerMappingRepository.getListBannerBySections(sectionId);
        List<BannerInfoDto> list = convertInfo(bannersList, bannerMappingsList);
        return list;
    }

    // Convert - điều kiện: 1 section có nhiều banner và ko banner nào lặp lại id (what?)
    public List<BannerInfoDto> getBannerHidden(int sectionId){
        List<BannerEntity> bannersList = repository.getBannerHiddenBySectionId(sectionId);
        List<BannerMappingEntity> bannerMappingsList = bannerMappingRepository.getListBannerHiddenBySections(sectionId);
        List<BannerInfoDto> list = convertInfo(bannersList, bannerMappingsList);
        return list;
    }

    // Convert entities to Dto
    public List<BannerInfoDto> convertInfo(List<BannerEntity> bannersList, List<BannerMappingEntity> bannerMappingsList){
        List<BannerInfoDto> list = new ArrayList<>();
        for(int i = 0; i < bannersList.size(); i++){
            BannerEntity banner = bannersList.get(i);
            BannerMappingEntity bannerMapping = bannerMappingsList.get(i);
            int id = bannerMapping.getId();
            int bannerID = banner.getId();
            String code = banner.getCode();
            String name = banner.getName();
            String imgUrl = banner.getImgUrl();
            int sectionID = bannerMapping.getSectionID();
            String url = banner.getUrl();
            short state = bannerMapping.getState();
            int percentage = bannerMapping.getPercentage();
            BannerInfoDto bannerInfoDto = new BannerInfoDto(id, bannerID, code, name, imgUrl, sectionID, url, state, percentage);
            list.add(bannerInfoDto);
        }
        return list;
    }
=======
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21

}
