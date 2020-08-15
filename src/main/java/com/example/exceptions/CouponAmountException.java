package com.example.exceptions;

public class CouponAmountException extends Exception{

	public CouponAmountException() {
		super("Coupon purchase failed! coupons ran out!");
	}

	
}
