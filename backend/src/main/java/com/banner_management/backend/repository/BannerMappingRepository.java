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

    @Query(value = "select * from banner_mapping where banner_id = ?1 and section_id = ?2 and percentage > 0", nativeQuery = true)
    BannerMappingEntity getPercentageByBannerIDAndSectionID(Integer bannerID, Integer sectionID);



    @Modifying
    @Query(value = "update banner_mapping set percentage = ?3 where state = 1 and banner_id = ?4 and section_id = ?5", nativeQuery = true)
    void updatePercentageAndTimeDisplay(Integer percentage, Integer bannerID, Integer sectionID);

    // lay tong luong view theo section
    @Query(value = "SELECT SUM(number_view) AS sum_number_view FROM banner_mapping where state != 0 and section_id = ?1", nativeQuery = true)
    Integer sumNumberViewInSectionID(int sectionID);

    // lay tong luong Click theo section
    @Query(value = "SELECT SUM(number_click) AS sum_number_click FROM banner_mapping where state != 0 and section_id = ?1", nativeQuery = true)
    Integer sumNumberClickInSectionID(int sectionID);

    // Lấy các banner có sectionId đã cho và có state != 0
    @Query(value = "select * from banner_mapping where banner_mapping.section_id = ?1 and state != 0", nativeQuery = true)
    List<BannerMappingEntity> getListBannerBySections(Integer sectionId);

    // Lọc theo bannerID
    @Query(value = "select * from banner_mapping where banner_id = ?1", nativeQuery = true)
    List<BannerMappingEntity> getListByBannerId(Integer bannerId);

    // Lọc theo sectionID
    @Query(value = "select * from banner_mapping where section_id = ?1", nativeQuery = true)
    List<BannerMappingEntity> getListBySectionId(Integer sectionId);


    // Lọc theo bannerID
    @Query(value = "SELECT  SUM(number_click) AS clicks  from banner_mapping where banner_id = ?1", nativeQuery = true)
    Integer getSumCliksByBannerId(Integer bannerId);
    @Query(value = "SELECT  SUM(number_view) AS views  from banner_mapping where banner_id = ?1", nativeQuery = true)
    Integer getSumViewByBannerId(Integer bannerId);

    // Lấy banner có sectionId đã cho và có state = 0
    @Query(value = "select * from banner_mapping left join banners on banner_mapping.banner_id = banners.id where banner_mapping.section_id = ?1 and state = 0", nativeQuery = true)
    List<BannerMappingEntity> getListBannerHiddenBySections(Integer sectionId);
}
