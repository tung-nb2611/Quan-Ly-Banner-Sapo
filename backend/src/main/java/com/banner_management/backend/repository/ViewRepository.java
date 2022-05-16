package com.banner_management.backend.repository;

import com.banner_management.backend.entity.ClickEntity;
import com.banner_management.backend.entity.ViewEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;


@Repository
public interface ViewRepository extends JpaRepository<ViewEntity, Integer> {

    @Query(value = "select * from views where banner_id = ?1 and section_id = ?2", nativeQuery = true)
    ViewEntity getByBannerIDAndSectionID(Integer bannerID, Integer sectionID);


    @Query(value = "select * from views where banner_id = ?1 ", nativeQuery = true)
    List<ViewEntity> getAllViewsByBannerByID(Integer bannerID);


    @Query(value = "select banner_id, sum(number) from views group by banner_id order by sum(number)", nativeQuery = true)
    ViewEntity getViewsOfAllBanners();

    @Query(value = "SELECT sum(number) from views where banner_id = ?1", nativeQuery = true)
    Integer getViewsByBannerID(Integer bannerId);

    // query tính lượng view theo năm và theo khu vực
    @Query(value = "select count(id) from views where year(views.time_view) = ?1 and section_id = ?2", nativeQuery = true)
    Integer getSumViewBySectionIDForYear(int year, int sectionID);


    // query tinh luong view theo tháng theo khu vuc
    @Query(value = "select count(id) from views where year(views.time_view) = ?1 and month(views.time_view) = ?2 and section_id = ?3", nativeQuery = true)
    Integer getSumViewByForMonth(int year, int month , int sectionID);


    // query tinh luong view theo tháng
    @Query(value = "select count(id) from views where year(views.time_view) = ?1 and month(views.time_view) = ?2 ", nativeQuery = true)
    Integer getSumViewByMonth(int year, int month );




//    // query tinh luong view theo tuần theo khu vuc
//    @Query(value = "select count(id) as number_click from views where month(views.time_view) = ?1 and section_id = ?2", nativeQuery = true)
//    Integer getSumViewBySectionIDForWeek(int month, int sectionID);

//    // query tinh luong view theo tháng theo khu vuc
//    @Query(value = "select count(id) from views where date(views.time_view) = ?1 and section_id = ?2", nativeQuery = true)
//    Integer getSumViewBySectionIDForDay(Date day, int sectionID);

    //Lấy tổng lượng view theo tháng
    @Query(value ="SELECT (monthname(time_view)) AS  month , COUNT(*) AS views FROM views where section_id =?1 GROUP BY month ORDER BY month ASC",nativeQuery = true)

    Integer getSumViewBySectionIDForMonth( int sectionID);

    // tổng lượng views tại trang web by month

//    @Query(value="")

}
