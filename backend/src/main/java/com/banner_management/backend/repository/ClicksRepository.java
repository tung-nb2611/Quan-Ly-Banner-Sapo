package com.banner_management.backend.repository;

import com.banner_management.backend.entity.ClicksEntity;
import org.hibernate.mapping.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ClicksRepository extends JpaRepository<ClicksEntity, Integer> {
    @Query(value=" select count(id) from clicks Where banner_id =?1",nativeQuery = true)
    int getClickbybannerId (Integer bannerID);

    @Query(value=" select count(id) from clicks ", nativeQuery = true)
    int getCountClick();
}
