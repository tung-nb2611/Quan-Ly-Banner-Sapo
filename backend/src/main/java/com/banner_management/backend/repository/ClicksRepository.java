package com.banner_management.backend.repository;

import com.banner_management.backend.entity.ClicksEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ClicksRepository extends JpaRepository<ClicksEntity, Integer> {


    @Query(value = "SELECT sum(number) from views where banner_id = ?1", nativeQuery = true)
    Integer getViewsByBannerID(Integer bannerId);

    // Tính số lượng click của 1 banner trong ngày vừa rồi
    @Query(value = "select count(id) from clicks where banner_id = ?1 and timestampdiff(day, time_click, sysdate()) <= 1", nativeQuery = true)
    int getClickCountPreviousDayByBannerId(Integer bannerId);

    // Tính số lượng click của 1 banner trong tuần vừa rồi
    @Query(value = "select count(id) from clicks where banner_id = ?1 and timestampdiff(week, time_click, sysdate()) <= 1", nativeQuery = true)
    int getClickCountPreviousWeekByBannerId(Integer bannerId);

    // Tính số lượng click của 1 banner trong tháng vừa rồi
    @Query(value = "select count(id) from clicks where banner_id = ?1 and timestampdiff(month, time_click, sysdate()) <= 1", nativeQuery = true)
    int getClickCountPreviousMonthByBannerId(Integer bannerId);

    // Tính số lượng click của 1 banner trong năm vừa rồi
    @Query(value = "select count(id) from clicks where banner_id = ?1 and timestampdiff(year, time_click, sysdate()) <= 1", nativeQuery = true)
    int getClickCountPreviousYearByBannerId(Integer bannerId);
}
