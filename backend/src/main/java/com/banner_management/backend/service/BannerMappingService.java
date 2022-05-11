package com.banner_management.backend.service;

import com.banner_management.backend.entity.BannerMappingEntity;
import com.banner_management.backend.repository.BannerMappingRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;


@Service
public class BannerMappingService {

    @Autowired
    BannerMappingRepository bannerMappingRepository;

    @Transactional
    public void save(BannerMappingEntity BannerMappingEntity){
        bannerMappingRepository.save(BannerMappingEntity);
    }

    @Transactional
    public void update(Timestamp timeDisplay, Integer sectionID){
        bannerMappingRepository.updateTimeDisplay(timeDisplay, sectionID);
    }
    public BannerMappingEntity getById(Integer id){
        return bannerMappingRepository.findById(id).get();
    }

    // lay banner da set ti trong de hien thi
    public BannerMappingEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
        return bannerMappingRepository.getPercentageByBannerIDAndSectionID(bannerID, sectionID);
    }

    public BannerMappingEntity listBannerStatusViaRandom(Integer sectionID){
        return bannerMappingRepository.getRandomBySectionID(sectionID);
    }

    @Transactional
    public void updatePercentage(Timestamp time_display, Integer percentage, Integer bannerID, Integer sectionID){
        bannerMappingRepository.updatePercentageAndTimeDisplay(time_display, percentage, bannerID, sectionID);
    }
    // Cách 1:
    //
    public String getImgUrlByPercentage(int sectionId){
        String imageUrl = "hello";
        List<BannerMappingEntity> bannerList = bannerMappingRepository.getListBannerBySections(sectionId);
        ArrayList<Integer> percentageList = new ArrayList<Integer>();
        if(!bannerList.isEmpty()) {
            for (BannerMappingEntity banner : bannerList) {
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
            imageUrl = bannerMappingRepository.getUrlByBannerId(percentageList.get(randomParam));
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
        List<BannerMappingEntity> bannerList = bannerMappingRepository.getListBannerBySections(sectionId);
        System.out.println("///////\n");
        for(BannerMappingEntity banner : bannerList){
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
            imageUrl = bannerMappingRepository.getUrlByBannerId(bannerIdList.get(position));
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
