package com.banner_management.backend.repository;

import com.banner_management.backend.entity.ViewsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Map;

@Repository
public interface ViewsRepository extends JpaRepository<ViewsEntity, Integer> {

    @Query(value = "select * from views where banner_id = ?1 and section_id = ?2", nativeQuery = true)
    ViewsEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID);

<<<<<<< HEAD
    @Query(value = "select * from views where banner_id = ?1 ", nativeQuery = true)
    ViewsEntity getByBannerByID(Integer bannerID);

=======
    @Query(value = "select banner_id, sum(number) from views group by banner_id order by sum(number)", nativeQuery = true)
    ViewsEntity getViewsOfAllBanners();

    @Query(value = "SELECT sum(number) from views where banner_id = ?1", nativeQuery = true)
    Integer getViewsByBannerID(Integer bannerId);
>>>>>>> 42e13bd06211c4b65dc2adf1721b28ec24bcf415
}
