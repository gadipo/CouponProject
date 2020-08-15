package com.example.exceptions;

public class CouponExpirationException extends Exception{

	public CouponExpirationException() {
		super("Coupon purchase failed! coupon has expired !");
	}

	
}
