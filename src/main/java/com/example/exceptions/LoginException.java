package com.example.exceptions;

public class LoginException extends Exception{

	public LoginException() {
		super("Email/Password does not match existing users");
	}
	
	
	

}
