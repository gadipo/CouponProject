package com.example.dailyJob;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.beans.Coupon;
import com.example.beans.Customer;
import com.example.repos.CouponRepo;
import com.example.repos.CustomerRepo;

@Component
public class CouponExpirationDailyJob extends Thread {

	@Autowired
	private CouponRepo coupDB;
	@Autowired
	private CustomerRepo cusDB;
	private boolean quit = false;

	public CouponExpirationDailyJob() {

	}

	// deletes any expired coupons and then sleeps for 24 hours
	@Override
	public void run() {
		while (quit == false) {
			long millis = System.currentTimeMillis();
			Date date = new Date(millis);
			try {
				for (Coupon coupon : coupDB.findAll()) {
					if (coupon.getEndDate().before(date)) {
						// deletes coupon purchase history
						coupDB.deleteCouponPurchases(coupon.getId());
						coupDB.delete(coupon);
						// keeps log of deletion
						System.out.println(coupon.getTitle()+" has expired and deleted by couponExpirationDailyJob at "+date);
					}
				}

				Thread.sleep(1000 * 60 * 60 * 24);
			} catch (InterruptedException e) {
				System.out.println(e.getMessage());

			}
		}
	}

	// stops the endless looping thread
	public void stopJob() {
		quit = true;
		interrupt();
	}

}
