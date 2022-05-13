package com.banner_management.backend.repository;

import com.banner_management.backend.entity.BannerMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public interface BannerMappingRepository extends JpaRepository<BannerMappingEntity, Integer> {
    @Query(value = "select * from banner_mapping where section_id = ?1 and state != 0 order by rand() limit 1", nativeQuery = true)
    BannerMappingEntity getRandomBySectionID(Integer sectionID);

    @Query(value = "select * from banner_mapping where banner_id = ?1 and section_id = ?2 and percentage > 0", nativeQuery = true)
    BannerMappingEntity getPercentageByBannerIDAndSectionID(Integer bannerID, Integer sectionID);

    @Modifying
<<<<<<< HEAD
    @Query(value = "update banner_mapping set percentage = ?3 where state = 1 and banner_id = ?4 and section_id = ?5", nativeQuery = true)
    void updatePercentageAndTimeDisplay(Integer percentage, Integer bannerID, Integer sectionID);
=======
    @Query(value = "update banner_mapping set time_display = ?1 where state = 1 and section_id = ?3", nativeQuery = true)
    void updateTimeDisplay(Timestamp timeDisplay, Integer sectionID);

    @Modifying
    @Query(value = "update banner_mapping set time_display = ?1, percentage = ?3 where state = 1 and banner_id = ?4 and section_id = ?5", nativeQuery = true)
    void updatePercentageAndTimeDisplay(Timestamp time_display, Integer percentage, Integer bannerID, Integer sectionID);
>>>>>>> main

//    @Query(value = "select * from banner_mapping left join banners on banner_mapping.banner_id = banners.id where banner_mapping.section_id = ?1", nativeQuery = true)
//    Page<BannerMappingEntity> getBannerStatusBySections(int id, Pageable pageable);

    // Lấy các banner có sectionId đã cho và có state != 0
    @Query(value = "select * from banner_mapping left join banners on banner_mapping.banner_id = banners.id where banner_mapping.section_id = ?1 and state != 0", nativeQuery = true)
    List<BannerMappingEntity> getListBannerBySections(Integer sectionId);

    // Lấy thông tin image url từ id banner đã cho
    @Query(value = "select img_url from banners where banners.id = ?1", nativeQuery = true)
    String getUrlByBannerId(Integer bannerId);

    // Lấy thông tin banner_mapping từ id banner đã cho
    @Query(value = "select * from banner_mapping where banner_id = ?1", nativeQuery = true)
    List<BannerMappingEntity> getAllByBannerId(Integer bannerId);



}