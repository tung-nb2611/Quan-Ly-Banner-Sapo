package com.banner_management.backend.repository;

import com.banner_management.backend.entity.ClicksEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClicksRepository extends JpaRepository<ClicksEntity, Integer> {
}
