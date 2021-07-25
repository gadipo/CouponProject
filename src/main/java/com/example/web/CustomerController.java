package com.example.web;

import java.sql.SQLException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.beans.Category;
import com.example.exceptions.BeanNotFoundException;
import com.example.exceptions.CouponAmountException;
import com.example.exceptions.CouponNameException;
import com.example.exceptions.CouponExpirationException;
import com.example.exceptions.CouponPriceException;
import com.example.exceptions.CouponPurchaseException;
import com.example.exceptions.NoSessionFoundException;
import com.example.exceptions.SessionTimeOutException;
import com.example.services.CompanyFacade;
import com.example.services.CustomerFacade;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
@RequestMapping("customer")
//@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

	@Autowired
	private Map<String, Session> sessions;

	@Autowired
	CompanyFacade comF;

	// receives a coupon unique id purchases it for the customer, in failure returns
	// a message .
	@GetMapping("purchaseCoupon/{id}/{token}")
	public ResponseEntity<?> purchaseCoupon(@PathVariable int id, @PathVariable String token) {
		try {
			CustomerFacade customer = (CustomerFacade) checkSession(token).getFacade();
			customer.purchaseCoupon(id);
			return ResponseEntity.ok(comF.getOneCompanyCoupon(id).getTitle() + " was purchased successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// returns all the coupons purchased by the customer logged in, in failure
	// returns a message .
	@GetMapping("getCustomerCoupons/{token}")
	public ResponseEntity<?> getCustomerCoupons(@PathVariable String token) {
		try {
			CustomerFacade customer = (CustomerFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(customer.getCustomerCoupons());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives a category from client and returns all the coupons that match that
	// category purchased by the customer, in failure returns a message .
	@GetMapping("getCouponsByCat/{category}/{token}")
	public ResponseEntity<?> getCustomerCoupons(@PathVariable Category category, @PathVariable String token) {
		try {
			CustomerFacade customer = (CustomerFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(customer.getCustomerCoupons(category));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives a maximum price from client and returns all the coupons that are
	// below that price that were purchased by the customer, in failure returns a
	// message .
	@GetMapping("getCouponsByPrice/{price}/{token}")
	public ResponseEntity<?> getCustomerCoupons(@PathVariable double price, @PathVariable String token) {
		try {
			CustomerFacade customer = (CustomerFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(customer.getCustomerCoupons(price));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// returns a customer object of the customer logged in, in failure returns a
	// message.
	@GetMapping("getCustomerDetails/{token}")
	public ResponseEntity<?> getCustomerDetails(@PathVariable String token) {
		try {
			CustomerFacade customer = (CustomerFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(customer.getCustomerDetails());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// returns a list of all the coupons in DB for the client to choose from, in
	// failure returns a message.
	@GetMapping("getAllCoupons/{token}")
	public ResponseEntity<?> getAllCoupons(@PathVariable String token) {
		try {
			CustomerFacade customer = (CustomerFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(customer.getAllCoupons());
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
	public Session checkSession(String token) throws NoSessionFoundException, SessionTimeOutException {
		Session session = sessions.get(token);
		if (session == null) {
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
