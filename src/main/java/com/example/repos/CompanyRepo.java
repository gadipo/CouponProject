package com.example.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.beans.Company;


public interface CompanyRepo extends JpaRepository<Company, Integer> {
	
	boolean existsByEmailAndPassword(String Email,String Password);
	Company findByEmailAndPassword(String Email,String Password);
	Optional<Company> findByNameAndId(String name,int id);
	Optional<Company> findByName(String name);
	Optional<Company> findByEmail(String email);

//	@Query("select c.coupons from company c where c.category= :minId")
//	double courseDurationAverage(int minId);
	
	
}