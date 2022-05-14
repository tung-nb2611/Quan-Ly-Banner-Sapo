package com.banner_management.backend.repository;

import com.banner_management.backend.entity.BannerStatusEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public interface BannerStatusRepository extends JpaRepository<BannerStatusEntity, Integer> {
    @Query(value = "select * from banner_status where section_id = ?1 and state != 0 order by rand() limit 1", nativeQuery = true)
    BannerStatusEntity getRandomBySectionID(Integer sectionID);

    @Query(value = "select * from banner_status where banner_id = ?1 and section_id = ?2 and percentage > 0", nativeQuery = true)
    BannerStatusEntity getPercentageByBannerIDAndSectionID(Integer bannerID, Integer sectionID);

    @Modifying
    @Query(value = "update banner_status set time_display = ?1 where state = 1 and section_id = ?3", nativeQuery = true)
    void updateTimeDisplay(Timestamp timeDisplay, Integer sectionID);

    @Modifying
    @Query(value = "update banner_status set time_display = ?1, percentage = ?3 where state = 1 and banner_id = ?4 and section_id = ?5", nativeQuery = true)
    void updatePercentageAndTimeDisplay(Timestamp time_display, Integer percentage, Integer bannerID, Integer sectionID);

    @Query(value = "select * from banner_status where banner_status.section_id = ?1", nativeQuery = true)
    Page<BannerStatusEntity> getBannerStatusBySections(int sectionId, Pageable pageable);

    // Lấy các banner có sectionId đã cho và có state != 0
    @Query(value = "select * from banner_status left join banners on banner_status.banner_id = banners.id where banner_status.section_id = ?1 and state != 0", nativeQuery = true)
    List<BannerStatusEntity> getListBannerBySections(Integer sectionId);

    // Lấy thông tin image url từ id banner đã cho
    @Query(value = "select img_url from banners where banners.id = ?1", nativeQuery = true)
    String getUrlByBannerId(Integer bannerId);

}
