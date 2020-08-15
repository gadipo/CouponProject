package com.example.services;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.example.beans.Category;
import com.example.beans.Company;
import com.example.beans.Coupon;
import com.example.beans.Customer;
import com.example.exceptions.BeanNotFoundException;
import com.example.exceptions.CoupIdNotFoundException;
import com.example.exceptions.CouponNameException;
import com.example.exceptions.LoginException;

@Service
@Scope("prototype")
public class CompanyFacade extends ClientFacade {

	private int companyId;

	public int getCompanyId() {
		return companyId;
	}

	// checks if company exists in DB according to email and password submitted, if
	// it does, saves its id into a class reference for use in other methods
	@Override
	public boolean login(String email, String password) throws LoginException, SQLException {
		if (compDB.existsByEmailAndPassword(email, password) == false) {
			throw new LoginException();
		} else {
			this.companyId = compDB.findByEmailAndPassword(email, password).getId();
			return true;
		}
	}

	// receives a coupon object, sets its company to the one logged in, checks for
	// pre-existing titles and saves the coupon into DB
	public void addCoupon(Coupon coupon) throws SQLException, CouponNameException, BeanNotFoundException {
		coupon.setCompany(getCompanyDetails());
		for (Coupon c : (getCompanyCoupons())) {
			if (c.getTitle().equalsIgnoreCase(coupon.getTitle())) {
				throw new CouponNameException();
			}
		}

		coupDB.save(coupon);
	}

	// receives a coupon object, checks for pre-existing titles and updates the
	// coupon in the DB
	public void updateCoupon(Coupon coupon) throws CouponNameException, SQLException, BeanNotFoundException {
		List<Coupon> coupons = getCompanyCoupons();
		// in order to check for taken title names by other coupons, we remove the
		// received coupon from the company's coupon list, and only then run through it.
		coupons.remove(coupon);
		for (Coupon c : coupons) {
			if (c.getTitle().equalsIgnoreCase(coupon.getTitle())) {
				throw new CouponNameException();
			}
		}
		coupDB.save(coupon);
	}

	// receives the id of the coupon, checks if it exists in DB, deletes all of its
	// purchase history and then deletes it from DB
	public void deleteCoupon(int couponId) throws SQLException, BeanNotFoundException {
		coupDB.findById(couponId).orElseThrow(BeanNotFoundException::new);
		coupDB.deleteCouponPurchases(couponId);
		coupDB.deleteById(couponId);
	}

	// returns the list of coupons of company logged in
	public List<Coupon> getCompanyCoupons() throws SQLException, BeanNotFoundException {
		return getCompanyDetails().getCoupons();

	}

	// returns a list of company coupons according to the category received
	public List<Coupon> getCompanyCoupons(Category category) throws SQLException, BeanNotFoundException {
		List<Coupon> coupons = new ArrayList<Coupon>();

		for (Coupon coupon : getCompanyCoupons()) {
			if (coupon.getCategory().equals(category)) {
				coupons.add(coupon);
			}
		}
		return coupons;
	}

	// returns a list of all of the company coupons which are below the price
	// received
	public List<Coupon> getCompanyCouponsBelow(double maxPrice) throws SQLException, BeanNotFoundException {
		List<Coupon> coupons = new ArrayList<Coupon>();
		for (Coupon coupon : getCompanyCoupons()) {
			if (coupon.getPrice() < maxPrice) {
				coupons.add(coupon);
			}
		}
		return coupons;
	}

	// returns one company coupon according to id received
	public Coupon getOneCompanyCoupon(int id) throws BeanNotFoundException {
		return coupDB.findById(id).orElseThrow(BeanNotFoundException::new);
	}

	// returns the company that is logged in
	public Company getCompanyDetails() throws SQLException, BeanNotFoundException {
		return compDB.findById(this.companyId).orElseThrow(BeanNotFoundException::new);
		
	}

}
