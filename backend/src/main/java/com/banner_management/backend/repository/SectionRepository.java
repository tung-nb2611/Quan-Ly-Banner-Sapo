package com.banner_management.backend.repository;

import com.banner_management.backend.entity.SectionEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SectionRepository extends JpaRepository<SectionEntity, Integer> {

    @Query(value = "select * from sections where position_web = ?1", nativeQuery = true)
    List<SectionEntity> getSectionEntitiesByPositionWeb(String position_web);
}