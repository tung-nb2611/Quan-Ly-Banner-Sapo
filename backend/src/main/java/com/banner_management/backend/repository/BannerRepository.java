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

    @Query(value = "select * from banners where user_add = ?1", nativeQuery = true)
    Page<BannerEntity> getBannerByUserAdd(String userAdd, Pageable pageable);

    //lấy bannerID banner theo website và khu vực
    @Query(value = "select banners.id, banners.name, banners.img_url " +
            "from banners left join banner_mapping on banners.id = banner_mapping.banner_id " +
            "left join sections on banner_mapping.section_id = sections.id " +
            "left join websites on websites.id = sections.web_id where banners.id = ?1", nativeQuery = true)
    List<BannerEntity> getBannerGroupByWebsiteAndSection(Integer bannerID);

    //lấy  banner theo website và khu vực
    @Query(value = "select banners.id, banners.name, banners.img_url " +
            "from banners left join banner_mapping on banners.id = banner_mapping.banner_id " +
            "left join sections on banner_mapping.section_id = sections.id " +
            "left join websites on websites.id = sections.web_id where section.id = ?1", nativeQuery = true)
    List<BannerEntity> getBanneByWebsiteAndSection(Integer sectionID);

    @Query(value = "select banners.id, banners.code, banners.name, banners.url, banners.user_add, banners.user_fix, banners.create_at, banners.modified_at, banners.img_url from banner_mapping left join banners on banner_mapping.banner_id = banners.id where banner_mapping.section_id = ?1 and state != 0", nativeQuery = true)
    List<BannerEntity> getBannerEnableBySectionId(int id);


    //    select * from banners left join banner_mapping on banner_mapping.banner_id = banners.id where banner_mapping.section_id = ?1 and state = 0
    //    @Query(value = "select * from banner_mapping left join banners on banner_mapping.banner_id = banners.id where banner_mapping.section_id = ?1 and state = 0"
    @Query(value = "select banners.id, banners.code, banners.name, banners.url, banners.user_add, banners.user_fix, banners.create_at, banners.modified_at, banners.img_url from banner_mapping left join banners on banner_mapping.banner_id = banners.id where banner_mapping.section_id = ?1 and state = 0", nativeQuery = true)
    List<BannerEntity> getBannerHiddenBySectionId(int id);
}
