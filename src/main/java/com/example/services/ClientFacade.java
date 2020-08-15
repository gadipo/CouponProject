package com.example.services;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.exceptions.LoginException;
import com.example.repos.CompanyRepo;
import com.example.repos.CouponRepo;
import com.example.repos.CustomerRepo;



public abstract class ClientFacade { // we want to use inheritance (extends) when we have attributes that we want inherit, and interfaces when we simply want to inherit methods. 
	
	@Autowired
	protected CompanyRepo compDB;
	@Autowired
	protected CouponRepo coupDB;
	@Autowired
	protected CustomerRepo cusDB;
	
	// All Facades will inherit login method to check if user exists in DB according to email and password, 
	// and return true if exists or false if doesn't exist
	public abstract boolean login (String email,String password) throws LoginException, SQLException ; 

}
