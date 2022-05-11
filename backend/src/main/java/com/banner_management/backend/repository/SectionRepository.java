package com.banner_management.backend.repository;

import com.banner_management.backend.entity.ClicksEntity;
import com.banner_management.backend.entity.SectionEntity;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SectionRepository extends JpaRepository<SectionEntity, Integer> {

    //
    @Query(value = "select * from sections where user_add = ?1", nativeQuery = true)
    List<SectionEntity> getSectionEntitiesByUser_add(String user_add);

    //
    @Query(value = "select * from sections where user_add = ?1", nativeQuery = true)
    Page<SectionEntity> getSectionByPageAndUserAdd(String userAdd, Pageable pageable);

    //
    @Query(value = "select * from sections", nativeQuery = true)
    Page<SectionEntity> getSectionByPage(Pageable pageable);


}