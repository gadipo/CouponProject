package com.example.exceptions;

public class LoginException extends Exception{

	public LoginException() {
		super("username/email does not match existing users");
	}
	
	
	

}
