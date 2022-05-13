package com.banner_management.backend.repository;
import com.banner_management.backend.entity.ClickEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import java.util.List;

@EnableJpaRepositories
@Repository
public interface ClickRepository extends JpaRepository<ClickEntity, Integer> {

<<<<<<< HEAD
    // query tính lượng view theo năm và theo khu vực
    @Query(value = "select count(id) from clicks where year(clicks.time_click) = ?1 and section_id = ?2", nativeQuery = true)
    Integer getSumClickBySectionIDForYear(int year, int sectionID);

    // query tinh luong view theo tháng theo khu vuc
    @Query(value = "select count(id) from clicks where year(clicks.time_click) = ?1 and month(clicks.time_click) = ?2 and section_id = ?3", nativeQuery = true)
    Integer getSumClickBySectionIDForMonth(int year, int month , int sectionID);

//    // query tinh luong view theo tuần theo khu vuc
//    @Query(value = "select count(id) as number_click from views where month(views.time_view) = ?1 and section_id = ?2", nativeQuery = true)
//    Integer getSumViewBySectionIDForWeek(int month, int sectionID);

    // query tinh luong view theo tháng theo khu vuc
    @Query(value = "select count(id) from clicks where date(clicks.time_click) = ?1 and section_id = ?2", nativeQuery = true)
    Integer getSumClickBySectionIDForDay(Date day, int sectionID);
=======
//    // Tính số lượng click ở 1 banner bất kì
//    @Query(value=" select count(id) from clicks Where banner_id =?1",nativeQuery = true)
//    int getClickbybannerId (Integer bannerId);
//
//    // Tính tổng số lượng click tất cả các banner
//    @Query(value=" select count(id) from clicks ", nativeQuery = true)
//    int getCountClick();
//
// Lấy thông tin click của từng banner
    @Query(value="select * from clicks ", nativeQuery = true)
    List<ClickEntity> getAllClick( );
//
//    @Query(value = "select * from clicks where banner_id = ?1", nativeQuery = true)
//    Page<ClickEntity> getClicksByBannerId(int id, Pageable pageable);
//
//    @Query(value = "SELECT sum(number) from views where banner_id = ?1", nativeQuery = true)
//    Integer getViewsByBannerID(Integer bannerId);
//
    // Tính số lượng click của 1 banner trong ngày vừa rồi
    @Query(value = "select * from clicks  and timestampdiff(day, time_click, sysdate()) <= 1", nativeQuery = true)
    int getClickCountPreviousDayByBannerId();
//
//    // Tính số lượng click của 1 banner trong tuần vừa rồi
//    @Query(value = "select count(id) from clicks where banner_id = ?1 and timestampdiff(week, time_click, sysdate()) <= 1", nativeQuery = true)
//    int getClickCountPreviousWeekByBannerId(Integer bannerId);
//
//    // Tính số lượng click của 1 banner trong tháng vừa rồi
//    @Query(value = "select count(id) from clicks where banner_id = ?1 and timestampdiff(month, time_click, sysdate()) <= 1", nativeQuery = true)
//    int getClickCountPreviousMonthByBannerId(Integer bannerId);
//
//    // Tính số lượng click của 1 banner trong năm vừa rồi
//    @Query(value = "select count(id) from clicks where banner_id = ?1 and timestampdiff(year, time_click, sysdate()) <= 1", nativeQuery = true)
//    int getClickCountPreviousYearByBannerId(Integer bannerId);
>>>>>>> ffdc1ceeb71f17b32af0e6e9e2a3b673c16fd898

}
