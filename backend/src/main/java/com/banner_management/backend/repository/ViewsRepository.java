package com.banner_management.backend.repository;

import com.banner_management.backend.entity.BannerEntity;
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


    @Query(value = "select * from views where banner_id = ?1 ", nativeQuery = true)
    ViewsEntity getByBannerByID(Integer bannerID);


    @Query(value = "select banner_id, sum(number) from views group by banner_id order by sum(number)", nativeQuery = true)
    ViewsEntity getViewsOfAllBanners();

    @Query(value = "SELECT sum(number) from views where banner_id = ?1", nativeQuery = true)
    Integer getViewsByBannerID(Integer bannerId);
////lấy thông tin views và tên banner
//        @Query(value = "select banners.name, views.number as views, number_clicks.number as clicks  from banners join views  on banners.id= views.banner_id " +
//                "                           join number_clicks on banners.id = number_clicks.banner_id",nativeQuery = true)
//       List<ViewsEntity>  getViews();
////
}
