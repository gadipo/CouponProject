package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.dailyJob.CouponExpirationDailyJob;


@SpringBootApplication
public class CouponPhase3Application {

	public static void main(String[] args) {
		
		ConfigurableApplicationContext ctx = SpringApplication.run(CouponPhase3Application.class, args);
		CouponExpirationDailyJob t1 = ctx.getBean(CouponExpirationDailyJob.class);
		//start Daily Job
		t1.start();
	}

}
