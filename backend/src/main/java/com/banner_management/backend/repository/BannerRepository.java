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

    @Query(value = "select * from banner_status left join banners on banner_status.banner_id = banners.id where section_id = ?1 ", nativeQuery = true)
    List<BannerEntity> getAllBySectionID(Integer sectionID);


    @Query(value = "select * from banners left join banner_status on banner_status.banner_id = banners.id where banner_status.section_id = ?1", nativeQuery = true)
    Page<BannerEntity> getBannerStatusBySections(int id, Pageable pageable);
}
