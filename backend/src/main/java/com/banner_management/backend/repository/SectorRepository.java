package com.banner_management.backend.repository;

import com.banner_management.backend.entity.SectorEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SectorRepository extends JpaRepository<SectorEntity, Integer> {

    @Query(value = "select * from sectors where section_id = ?1", nativeQuery = true)
    List<SectorEntity> getSectorEntitiesBySection_id(int section_id);
}
