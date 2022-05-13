package com.banner_management.backend.repository;

<<<<<<< HEAD

=======
>>>>>>> 46b52ec208244197b799b99e415dc224194e1c51
import com.banner_management.backend.entity.WebsiteEntity;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WebsiteRepository extends JpaRepository<WebsiteEntity, Integer> {

    //
    @Query(value = "select * from websites where user_add = ?1", nativeQuery = true)
    List<WebsiteEntity> getSectionEntitiesByUser_add(String user_add);

    //
    @Query(value = "select * from websites where user_add = ?1", nativeQuery = true)
    Page<WebsiteEntity> getSectionByPageAndUserAdd(String userAdd, Pageable pageable);

    //
    @Query(value = "select * from websites", nativeQuery = true)
    Page<WebsiteEntity> getSectionByPage(Pageable pageable);


}