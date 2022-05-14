package com.banner_management.backend.repository.user;

import java.util.Optional;

import com.banner_management.backend.entity.user.ERole;
import com.banner_management.backend.entity.user.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}