package com.banner_management.backend.repository.user;

import java.util.Optional;

import com.banner_management.backend.entity.user.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);

	boolean existsByUsername(String username);
	boolean existsByEmail(String username);
	@Query(value = "SELECT COALESCE(sum(u.id), 0) as sum\n" +
			"FROM users u \n" +
			"WHERE u.username = ?1", nativeQuery = true)
	int checkUsername(String username);

	@Query(value = "SELECT COALESCE(sum(u.id), 0) as sum\n" +
			"FROM users u\n" +
			"WHERE u.username = '?1'", nativeQuery = true)
	int checkEmail(String email);
}