package com.example.web;

import java.sql.SQLException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.beans.Category;
import com.example.beans.Company;
import com.example.beans.Coupon;
import com.example.exceptions.AddCompanyException;
import com.example.exceptions.BeanNotFoundException;
import com.example.exceptions.CoupIdNotFoundException;
import com.example.exceptions.CouponNameException;
import com.example.exceptions.NoSessionFoundException;
import com.example.exceptions.SessionTimeOutException;
import com.example.services.AdminFacade;
import com.example.services.CompanyFacade;

@RestController
@RequestMapping("company")
//@CrossOrigin(origins = "http://localhost:4200")
public class CompanyController {

	@Autowired
	private Map<String, OurSession> sessions;

	// receives a coupon object from client and adds it to DB using facade. return a message of success/failure.
	@PostMapping("addCoupon/{token}")
	public ResponseEntity<?> addCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
		try {
			CompanyFacade company = (CompanyFacade) checkSession(token).getFacade();
			company.addCoupon(coupon);
			return ResponseEntity.ok(coupon.getTitle() + " was added successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	// receives a coupon object from client and updates it in DB using facade. return a message of success/failure.
	@PutMapping("updateCoupon/{token}")
	public ResponseEntity<?> updateCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
		try {
			CompanyFacade company = (CompanyFacade) checkSession(token).getFacade();
			company.updateCoupon(coupon);
			return ResponseEntity.ok(coupon.getTitle() + " was updated successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	// receives a coupon id from client and deletes its corresponding coupon from DB using facade. return a message of success/failure.
	@DeleteMapping("deleteCoupon/{id}/{token}")
	public ResponseEntity<?> deleteCoupon(@PathVariable int id, @PathVariable String token) {
		try {
			CompanyFacade company = (CompanyFacade) checkSession(token).getFacade();
			String couponName = company.getOneCompanyCoupon(id).getTitle();
			company.deleteCoupon(id);
			return ResponseEntity.ok("Coupon by the name of " + couponName + " was deleted successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// returns all of the coupons of the company logged in from DB using facade, in failure returns a message .
	@GetMapping("getCoupons/{token}")
	public ResponseEntity<?> getCoupons(@PathVariable String token) {
		try {
			CompanyFacade company = (CompanyFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(company.getCompanyCoupons());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// returns all the company coupons that match the category given by user, in failure returns a message .
	@GetMapping("getCouponsByCategory/{category}/{token}")
	public ResponseEntity<?> getCouponsByCategory(@PathVariable Category category, @PathVariable String token) {
		try {
			CompanyFacade company = (CompanyFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(company.getCompanyCoupons(category));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// returns all the company coupons that have a price lower than the one given by user, in failure returns a message .
	@GetMapping("getCouponsBelowPrice/{price}/{token}")
	public ResponseEntity<?> getCouponsBelowPrice(@PathVariable double price, @PathVariable String token) {
		try {
			CompanyFacade company = (CompanyFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(company.getCompanyCouponsBelow(price));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	// receives a coupon id from client and returns the corresponding coupon using facade, in failure returns a message .
	@GetMapping("getOneCoupon/{id}/{token}")
	public ResponseEntity<?> getOneCoupon(@PathVariable int id, @PathVariable String token) {
		try {
			CompanyFacade company = (CompanyFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(company.getOneCompanyCoupon(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// returns the company object of the company logged in, in failure returns a message .
	@GetMapping("getCompanyDetails/{token}")
	public ResponseEntity<?> getCompanyDetails(@PathVariable String token) {
		try {
			CompanyFacade company = (CompanyFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(company.getCompanyDetails());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives the user token and uses it to fetch its corresponding session. if no session is
	// found or, if 30 mins have passed since the last session check, throws an
	// exception.
	// upon success, returns the validated session with a timestamp.
	// this test will be used in every controller method to validate if user is
	// logged in and active using the token he received upon login.
	public OurSession checkSession(String token) throws NoSessionFoundException, SessionTimeOutException {
		OurSession session = sessions.get(token);
		if (session == null || !(session.getFacade() instanceof CompanyFacade)) {// u can add a check to see if the
																					// facade received in session is
																					// actually companyFacade
			throw new NoSessionFoundException();
		}
		if (System.currentTimeMillis() - session.getLastAccessed() > 1000 * 60 * 30) {
			sessions.remove(token);
			throw new SessionTimeOutException();
		}
		session.setLastAccessed(System.currentTimeMillis());
		return session;
	}

}
