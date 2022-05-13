package com.banner_management.backend.repository;

import com.banner_management.backend.entity.SectionEntity;


import com.banner_management.backend.entity.WebsiteEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SectionRepository extends JpaRepository<SectionEntity, Integer> {

<<<<<<< HEAD

    @Query(value = "select * from sections where web_id = ?1", nativeQuery = true)

 List<SectionEntity> getSectionEntitiesByWebsiteID(int webId);
=======
    @Query(value = "select * from sections where web_id = ?1", nativeQuery = true)
    List<SectionEntity> getSectionEntitiesByWebsiteID(int webId);
>>>>>>> a0fb9389283267b8426b0096bf281f0331995ba9

    @Query(value = "select * from sections where web_id = ?1", nativeQuery = true)
    Page<SectionEntity> getSectionByPageAndWebsiteId(int webId, Pageable pageable);
}
