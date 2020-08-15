package com.example.web;

import java.util.Map;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.example.services.AdminFacade;

@Component
@Aspect
public class ControllerAspect {
//
	@Autowired
	private Map<String, OurSession> sessions;

	//// U can activate these 2 aop's instead of checkSession() in each Controller
	
//	@Around("ResponseEntity<?> com.example.web..*(String,..) && args(token,..)")
//	public ResponseEntity<?> checkSession(ProceedingJoinPoint pjp, String token) throws Throwable {
//		OurSession s = sessions.get(token);
//		if(s==null)
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("U have to login mate !");
//		if(System.currentTimeMillis()- s.getLastAccessed() >1000*60*30) {
//			sessions.remove(token);
//			return ResponseEntity.status(HttpStatus.GATEWAY_TIMEOUT).body("you've waited too long ! login again !");
//		}
//		s.setLastAccessed(System.currentTimeMillis());
//		return (ResponseEntity<?>) pjp.proceed();
//	}
//
//	@Around("ResponseEntity<?> com.example.web..*(..,String) && args(..,token)")
//	public ResponseEntity<?> checkSession2(ProceedingJoinPoint pjp, String token) throws Throwable {
//		OurSession s = sessions.get(token);
//		if(s==null)
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("U have to login mate !");
//		if(System.currentTimeMillis()- s.getLastAccessed() >1000*60*30) {
//			sessions.remove(token);
//			return ResponseEntity.status(HttpStatus.GATEWAY_TIMEOUT).body("you've waited too long ! login again !");
//		}
//		s.setLastAccessed(System.currentTimeMillis());
//		return (ResponseEntity<?>) pjp.proceed();
//	}
}