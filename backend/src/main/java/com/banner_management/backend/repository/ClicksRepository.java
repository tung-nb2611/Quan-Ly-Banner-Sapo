package com.banner_management.backend.repository;

import com.banner_management.backend.entity.ClicksEntity;
import org.hibernate.mapping.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ClicksRepository extends JpaRepository<ClicksEntity, Integer> {
<<<<<<< HEAD
    @Query(value=" select count(id) from clicks Where banner_id =?1",nativeQuery = true)
    int getClickbybannerId (Integer bannerID);

    @Query(value=" select count(id) from clicks ", nativeQuery = true)
    int getCountClick();
=======


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
>>>>>>> 42e13bd06211c4b65dc2adf1721b28ec24bcf415
}
