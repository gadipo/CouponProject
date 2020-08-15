package com.example.exceptions;

public class CouponPurchaseException extends Exception{

	public CouponPurchaseException() {
		super("Coupon purchase failed ! Can't purchase same coupon twice! ");
	}

	
}
