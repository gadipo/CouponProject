package com.example.web;

import com.example.services.ClientFacade;

public class Session {

	private ClientFacade facade;
	private long lastAccessed;
	private int numOfTries;
	
	
	public Session(ClientFacade facade, long lastAccessed) {
		super();
		this.facade = facade;
		this.lastAccessed = lastAccessed;
	}


	public long getLastAccessed() {
		return lastAccessed;
	}


	public void setLastAccessed(long lastAccessed) {
		this.lastAccessed = lastAccessed;
	}


	public int getNumOfTries() {
		return numOfTries;
	}


	public void setNumOfTries(int numOfTries) {
		this.numOfTries = numOfTries;
	}


	public ClientFacade getFacade() {
		return facade;
	}
	
	
}
