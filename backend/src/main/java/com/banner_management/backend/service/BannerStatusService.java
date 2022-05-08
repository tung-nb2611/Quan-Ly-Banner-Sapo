package com.banner_management.backend.service;

import com.banner_management.backend.dto.BannerStatusDto;
import com.banner_management.backend.entity.BannerEntity;
import com.banner_management.backend.entity.BannerStatusEntity;
import com.banner_management.backend.repository.BannerStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
public class BannerStatusService {

    @Autowired
    BannerStatusRepository repository;

    @Transactional
    public void save(BannerStatusEntity bannerStatusEntity){
        repository.save(bannerStatusEntity);
    }

    @Transactional
    public void update(Timestamp timeDisplay, Integer sectionID){
        repository.updateTimeDisplay(timeDisplay, sectionID);
    }
    public BannerStatusEntity getById(Integer id){
        return repository.findById(id).get();
    }

    // lay banner da set ti trong de hien thi
    public BannerStatusEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
        return repository.getPercentageByBannerIDAndSectionID(bannerID, sectionID);
    }

    public BannerStatusEntity listBannerStatusViaRandom(Integer sectionID){
        return repository.getRandomBySectionID(sectionID);
    }

    @Transactional
    public void updatePercentage(Timestamp time_display, Integer percentage, Integer bannerID, Integer sectionID){
        repository.updatePercentageAndTimeDisplay(time_display, percentage, bannerID, sectionID);
    }
    // Cách 1:
    //
    public String getImgUrlByPercentage(int sectionId){
        String imageUrl = "hello";
        List<BannerStatusEntity> bannerList = repository.getListBannerBySections(sectionId);
        ArrayList<Integer> percentageList = new ArrayList<Integer>();
        if(!bannerList.isEmpty()) {
            for (BannerStatusEntity banner : bannerList) {
                int bannerId = banner.getBannerID();
                int count = banner.getPercentage() / 10;
                if (count != 0) {
                    for (int i = 0; i < count; i++) {
                        percentageList.add(bannerId);
                    }
                }
            }
            int randomParam = (int) Math.floor(Math.random() * percentageList.size());

            System.out.println(percentageList);
            System.out.println(randomParam + " : " + percentageList.get(randomParam));
            System.out.println("\n");
            imageUrl = repository.getUrlByBannerId(percentageList.get(randomParam));
        } else {
            imageUrl = "No banners available\n";
        }
        return imageUrl;
    }
    // Cách 2:
    //
    //
    public String getImageUrlByPercentage(int sectionId){
        String imageUrl;
        List<Integer> bannerIdList = new ArrayList<Integer>();
        ArrayList<Integer> percentageList = new ArrayList<Integer>();
        ArrayList<Integer> generatedResult = new ArrayList<Integer>();
        List<BannerStatusEntity> bannerList = repository.getListBannerBySections(sectionId);
        System.out.println("///////\n");
        for(BannerStatusEntity banner : bannerList){
            bannerIdList.add(banner.getBannerID());
            percentageList.add(banner.getPercentage());
            int temp = (int) Math.floor(Math.random()*banner.getPercentage());
            generatedResult.add(temp);
        }
        System.out.println(bannerIdList);
        System.out.println(generatedResult);
        System.out.println(percentageList);
        if(bannerIdList.isEmpty()){
            imageUrl = "No image available";
        } else {
            int position = findTheLargest(generatedResult);
            imageUrl = repository.getUrlByBannerId(bannerIdList.get(position));
        }

        return imageUrl;
    }

    int findTheLargest(ArrayList<Integer> array){
        int position = 0;
        try {
            int max = array.get(0);
            for (int i = 0; i < array.size(); i++){
                if(max < array.get(i)){
                    max = array.get(i);
                    position = i;
                }
            }
        } catch (IndexOutOfBoundsException e){
            e.printStackTrace();
            System.out.println("No banners available in the sectións");
        }
        return position;
    }
}
