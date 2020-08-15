package com.example.repos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.beans.Company;
import com.example.beans.Coupon;


public interface CouponRepo extends JpaRepository<Coupon, Integer> {

	List<Coupon> findCouponsByCompany(Company company);

	//deletes ties between customers and coupons according to a specific coupon id
	@Modifying
	@Query(value = "delete from customers_coupons WHERE coupons_id=:id" , nativeQuery = true)
	@Transactional
	void deleteCouponPurchases(@Param("id") int id);
	
	//deletes ties between customers and coupons according to a specific customer id
	@Modifying
	@Query(value = "delete from customers_coupons WHERE customer_id=:id" , nativeQuery = true)
	@Transactional
	void deleteCustomerPurchases(@Param("id") int id);

}
