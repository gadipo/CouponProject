package com.example.exceptions;

public class BeanNotFoundException extends Exception{

	public BeanNotFoundException() {
		super("Command failed ! object not found in database !");
	}

	
	
}
