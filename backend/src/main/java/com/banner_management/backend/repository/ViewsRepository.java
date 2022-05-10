package com.banner_management.backend.repository;

import com.banner_management.backend.entity.ViewsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ViewsRepository extends JpaRepository<ViewsEntity, Integer> {

    @Query(value = "select * from views where banner_id = ?1 and section_id = ?2", nativeQuery = true)
    ViewsEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID);

    @Query(value = "select * from views where banner_id = ?1 ", nativeQuery = true)
    ViewsEntity getByBannerByID(Integer bannerID);

}
