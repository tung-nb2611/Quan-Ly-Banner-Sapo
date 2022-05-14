package com.banner_management.backend.service;

import com.banner_management.backend.entity.BannerEntity;
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

    @Autowired
    BannerService bannerService;



    @Transactional
    public void save(BannerMappingEntity BannerMappingEntity){
        bannerMappingRepository.save(BannerMappingEntity);
    }

    public BannerMappingEntity getById(Integer id){
        return bannerMappingRepository.findById(id).get();
    }

    // lay banner da set ti trong de hien thi
    public BannerMappingEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID){
        return bannerMappingRepository.getPercentageByBannerIDAndSectionID(bannerID, sectionID);
    }

    @Transactional
    public void updatePercentage(Integer percentage, Integer bannerID, Integer sectionID){
        bannerMappingRepository.updatePercentageAndTimeDisplay(percentage, bannerID, sectionID);
    }
//lấy thông tin banner theo banerID
    public List<BannerMappingEntity> getListBannerByBannerID(int bannerID){
        return bannerMappingRepository.getListByBannerId(bannerID);
    }
    //lấy list banner theo sectionID
    public List<BannerMappingEntity> getListBannerBySectionID(int sectionID){
        return bannerMappingRepository.getListBySectionId(sectionID);
    }
//    public List<BannerMappingEntity> getSumBannerByBannerID(int bannerID){
//        return bannerMappingRepository.getSumCliksAndViewByBannerId(bannerID);
//    }

    public BannerMappingEntity getBannerByPercentage(int sectionId){
        BannerMappingEntity newBannerMappingEntity = new BannerMappingEntity();
        List<Integer> bannerIdList = new ArrayList<Integer>();
        ArrayList<Integer> percentageList = new ArrayList<Integer>();
        ArrayList<Integer> generatedResult = new ArrayList<Integer>();
        List<BannerMappingEntity> bannerList = bannerMappingRepository.getListBannerBySections(sectionId);
        for(BannerMappingEntity bannerMappingEntity : bannerList){
            bannerIdList.add(bannerMappingEntity.getId());
            percentageList.add(bannerMappingEntity.getPercentage());
            int temp = (int) Math.floor(Math.random()*bannerMappingEntity.getPercentage());
            generatedResult.add(temp);
        }
        if(bannerIdList.isEmpty()){
            return null;
        } else {
            int position = findTheLargest(generatedResult);
            newBannerMappingEntity = bannerMappingRepository.getById(bannerIdList.get(position));
        }
        return newBannerMappingEntity;
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

    // lay tong view theo khu vuc
    public int getSumViewInSectionID(int sectionID){
        return bannerMappingRepository.sumNumberViewInSectionID(sectionID);
    }

    // lay tong click theo khu vuc
    public int getSumClickInSectionID(int sectionID){
        return bannerMappingRepository.sumNumberClickInSectionID(sectionID);
    }

    public int getSumViewInBannerTd(int bannerID){
        return  bannerMappingRepository.getSumViewByBannerId(bannerID);

    }
    public int getSumClickInBannerTd(int bannerID){
        return  bannerMappingRepository.getSumCliksByBannerId(bannerID);




    }


    public  int getSumClickInBannerBySectionId(int bannerID, int sectionID){
        return  bannerMappingRepository.getSumCliksByBannerIdInSectionId(bannerID,sectionID);
    }
    public  int getSumViewInBannerBySectionId(int bannerID, int sectionID){
        return  bannerMappingRepository.getSumViewsByBannerIdInSectionId(bannerID,sectionID);
    }

    public List<BannerMappingEntity> getListBannerEnabledBySectionId(int sectionId){
        return bannerMappingRepository.getListBannerBySections(sectionId);
    }

    //New
    public List<BannerMappingEntity> getListBannerHiddenBySectionId(int sectionId){
        return bannerMappingRepository.getListBannerHiddenBySections(sectionId);
    }

    public List<BannerMappingEntity> getAllBannerStatus() {return bannerMappingRepository.findAll();}



}
