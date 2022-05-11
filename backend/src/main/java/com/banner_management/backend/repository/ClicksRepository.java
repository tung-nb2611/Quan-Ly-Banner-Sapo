package com.banner_management.backend.repository;

import com.banner_management.backend.entity.ClicksEntity;
import org.hibernate.mapping.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClicksRepository extends JpaRepository<ClicksEntity, Integer> {

    // Tính số lượng click ở 1 banner bất kì
    @Query(value=" select count(id) from clicks Where banner_id =?1",nativeQuery = true)
    int getClickbybannerId (Integer bannerID);

    // Tính tổng số lượng click tất cả các banner
    @Query(value=" select count(id) from clicks ", nativeQuery = true)
    int getCountClick();

    // Lấy thông tin click của từng banner
    // @Query(value="select * from clicks where banner_id = ?1", nativeQuery = true)
    List<ClicksEntity> findClicksInfoByBannerID(int bannerId);

    @Query(value = "select * from clicks where banner_id = ?1", nativeQuery = true)
    Page<ClicksEntity> getClicksByBannerId(int id, Pageable pageable);


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
