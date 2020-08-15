package com.example.exceptions;

public class CoupIdNotFoundException extends Exception{

	public CoupIdNotFoundException() {
		super("coupon update failed ! there is no such coupon in this company");
	}
	
	
	
	

}
