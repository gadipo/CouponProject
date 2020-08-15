package com.example.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.beans.Customer;


public interface CustomerRepo extends JpaRepository<Customer, Integer> {

	boolean existsByEmailAndPassword(String email, String password);
	Optional<Customer> findByEmailAndPassword(String email, String password);
	Optional<Customer> findByEmailAndId(String email, int id);
	Optional<Customer> findByEmail(String email);
}

