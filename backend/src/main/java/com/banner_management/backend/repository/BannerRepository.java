package com.banner_management.backend.repository;
import com.banner_management.backend.entity.BannerEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BannerRepository extends JpaRepository<BannerEntity, Integer> {

    @Query(value = "select * from banners left join banner_mapping on banner_mapping.banner_id = banners.id where banner_mapping.section_id = ?1", nativeQuery = true)
    Page<BannerEntity> getBannerStatusBySections(int id, Pageable pageable);
}