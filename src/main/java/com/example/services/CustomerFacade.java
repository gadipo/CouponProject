package com.example.services;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.example.beans.Category;
import com.example.beans.Coupon;
import com.example.beans.Customer;
import com.example.exceptions.BeanNotFoundException;
import com.example.exceptions.CouponAmountException;
import com.example.exceptions.CouponExpirationException;
import com.example.exceptions.CouponPriceException;
import com.example.exceptions.CouponPurchaseException;
import com.example.exceptions.LoginException;

@Service
@Scope("prototype")
public class CustomerFacade extends ClientFacade {

	private int customerId;

	// checks if customer exists in DB according to email and password submitted, if
	// it does, saves its id into a class reference for use in other methods
	@Override
	public boolean login(String email, String password) throws LoginException, SQLException {
		Customer customer = cusDB.findByEmailAndPassword(email, password).orElseThrow(LoginException::new);
		this.customerId = customer.getId();
		return true;
	}

	// receives a coupon id, checks if the customer hasn't bought it already, if the
	// coupon amount is not 0, and if the coupon has not expired.
	// updates the coupon amount and the customer's coupon list after the purchase.
	public void purchaseCoupon(int couponId) throws SQLException, CouponPurchaseException, CouponAmountException,
			CouponExpirationException, BeanNotFoundException, CouponPriceException {
		Date now = new Date(System.currentTimeMillis());
		Customer c = getCustomerDetails();
		Coupon coupon = coupDB.findById(couponId).orElseThrow(BeanNotFoundException::new);
		List<Coupon> coupons = c.getCoupons();
		// if the customers coupons list is empty this test is skipped
		if (coupons != null) {
			// customer cannot purchase the same coupon twice
			if (coupons.contains(coupon)) {
				throw new CouponPurchaseException();
			}
		}
		// customer cannot purchase a coupon that is not in stock (amount=0)
		if (coupon.getAmount() <= 0) {
			throw new CouponAmountException();
		} // customer cannot purchase coupon that has expired
		if (coupon.getEndDate().before(now)) {
			throw new CouponExpirationException();
		}
		// purchase is being made - updating coupon stock
		coupon.setAmount(coupon.getAmount() - 1);
		coupDB.save(coupon);
		// adding the coupons to customers list
		coupons.add(coupon);
		c.setCoupons(coupons);
		cusDB.save(c);
	}

	// returns all of the customer's purchased coupons
	public List<Coupon> getCustomerCoupons() throws SQLException, BeanNotFoundException {
		return getCustomerDetails().getCoupons();
	}

	// receives a category and return only purchased coupons of that category
	public List<Coupon> getCustomerCoupons(Category category) throws SQLException, BeanNotFoundException {
		List<Coupon> coupons = new ArrayList<Coupon>();
		for (Coupon coupon : getCustomerCoupons()) {
			if (coupon.getCategory().equals(category)) {
				coupons.add(coupon);
			}
		}

		return coupons;
	}

	// receives a maximum price and return only purchased coupons that are below
	// that price
	public List<Coupon> getCustomerCoupons(double maxPrice) throws SQLException, BeanNotFoundException {
		List<Coupon> coupons = new ArrayList<Coupon>();
		for (Coupon coupon : getCustomerCoupons()) {
			if (coupon.getPrice() <= maxPrice) {
				coupons.add(coupon);
			}
		}
		return coupons;
	}

	// returns the customer that has logged in
	public Customer getCustomerDetails() throws SQLException, BeanNotFoundException {
		return cusDB.findById(this.customerId).orElseThrow(BeanNotFoundException::new);
	}

	// returns a list of all the coupons in DB. this is the list from which the customer will buy his coupons.
	public List<Coupon> getAllCoupons() {
		return coupDB.findAll();
	}
}
