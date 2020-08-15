package com.example.exceptions;

public class CouponPriceException extends Exception {

	public CouponPriceException() {
		super("coupon command failed ! Coupon price cannot be 0 or below");
	}
	
	
}
