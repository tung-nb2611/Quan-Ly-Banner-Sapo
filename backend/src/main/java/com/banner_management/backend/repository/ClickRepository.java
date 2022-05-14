package com.banner_management.backend.repository;
import com.banner_management.backend.entity.ClickEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@EnableJpaRepositories
@Repository
public interface ClickRepository extends JpaRepository<ClickEntity, Integer> {

    // query tính lượng view theo năm và theo khu vực
    @Query(value = "select count(id) from clicks where year(clicks.time_click) = ?1 and section_id = ?2", nativeQuery = true)
    Integer getSumClickBySectionIDForYear(int year, int sectionID);

    // query tinh luong view theo tháng theo khu vuc
    @Query(value = "SELECT (monthname(time_view)) AS  month , COUNT(*) AS clicks FROM cliks where section_id =?1 GROUP BY month ORDER BY month ASC", nativeQuery = true)
    Integer getSumClickBySectionIDForMonth( int sectionID);

//    // query tinh luong view theo tuần theo khu vuc
//    @Query(value = "select count(id) as number_click from views where month(views.time_view) = ?1 and section_id = ?2", nativeQuery = true)
//    Integer getSumViewBySectionIDForWeek(int month, int sectionID);

    // query tinh luong view theo tháng theo khu vuc
    @Query(value = "select count(id) from clicks where date(clicks.time_click) = ?1 and section_id = ?2", nativeQuery = true)
    Integer getSumClickBySectionIDForDay(Date day, int sectionID);



}
