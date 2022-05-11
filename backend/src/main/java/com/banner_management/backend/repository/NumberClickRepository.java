package com.banner_management.backend.repository;

import com.banner_management.backend.entity.NumberClickEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface NumberClickRepository extends JpaRepository<NumberClickEntity, Integer> {

    // lay du lieu click ko quan tam loai click dong hay click mo
    @Query(value = "select * from number_clicks where banner_id = ?1 and section_id = ?2", nativeQuery = true)
    NumberClickEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID);

    // lay du lieu click dua theo ca loai click la click dong hay click mo
    @Query(value = "select * from number_clicks where banner_id = ?1 and section_id = ?2 and code = ?3", nativeQuery = true)
    NumberClickEntity getByBannerIDAndSectionIDAndCode(Integer bannerID, Integer sectionID, Integer code);

}
