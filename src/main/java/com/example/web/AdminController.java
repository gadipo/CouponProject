package com.example.web;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Map;
import java.util.NoSuchElementException;

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

import com.example.beans.Company;
import com.example.beans.Customer;
import com.example.exceptions.AddCompanyException;
import com.example.exceptions.BeanNotFoundException;
import com.example.exceptions.NoSessionFoundException;
import com.example.exceptions.SessionTimeOutException;
import com.example.exceptions.UpdateCompanyException;
import com.example.services.AdminFacade;

@RestController
@RequestMapping("admin")
//@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	@Autowired
	private Map<String, OurSession> sessions;

	// receives a company object from client and adds it to DB using facade. return a message of success/failure.
	@PostMapping("addCompany/{token}")
	public ResponseEntity<?> addCompany(@PathVariable String token, @RequestBody Company company) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			admin.addCompany(company);
			return ResponseEntity.ok(company.getName() + " was added successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives a company object from client and updates it in DB using facade. return a message of success/failure.
	@PutMapping("updateCompany/{token}")
	public ResponseEntity<?> updateCompany(@PathVariable String token, @RequestBody Company company) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			admin.updateCompany(company);
			return ResponseEntity.ok(company.getName() + " was updated successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives a company id from client and deletes its corresponding company from DB using facade. return a message of success/failure.
	@DeleteMapping("deleteCompany/{id}/{token}")
	public ResponseEntity<?> deleteCompany(@PathVariable int id, @PathVariable String token) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			Company company = admin.getOneCompany(id);
			admin.deleteCompany(id);
			return ResponseEntity.ok("A Company named " + company.getName() + " was deleted successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// returns all companies from DB using facade, in failure returns a message .
	@GetMapping("getAllCompanies/{token}")
	public ResponseEntity<?> getAllCompanies(@PathVariable String token) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(admin.getAllCompanies());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives a company id from client and returns the corresponding company using facade, in failure returns a message .
	@GetMapping("getOneCompany/{id}/{token}")
	public ResponseEntity<?> getOneCompany(@PathVariable int id, @PathVariable String token) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(admin.getOneCompany(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives a company email from client and returns the corresponding company using facade, in failure returns a message .
	@GetMapping("getCompanyByEmail/{email}/{token}")
	public ResponseEntity<?> getOneCompany(@PathVariable String email, @PathVariable String token) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
//			System.out.println(admin.getOneCompany(email));
			return ResponseEntity.ok(admin.getOneCompany(email));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives a customer object from client and adds it to DB using facade. return a message of success/failure.
	@PostMapping("addCustomer/{token}")
	public ResponseEntity<?> addCustomer(@PathVariable String token, @RequestBody Customer customer) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			admin.addCustomer(customer);
			return ResponseEntity
					.ok(customer.getFirstName() + " " + customer.getLastName() + " was added successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives a customer object from client and updates it in DB using facade. return a message of success/failure.
	@PutMapping("updateCustomer/{token}")
	public ResponseEntity<?> updateCustomer(@PathVariable String token, @RequestBody Customer customer) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			admin.updateCustomer(customer);
			return ResponseEntity
					.ok(customer.getFirstName() + " " + customer.getLastName() + " was updated successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	// receives a customer id from client and deletes its corresponding customer from DB using facade. return a message of success/failure.
	@DeleteMapping("deleteCustomer/{id}/{token}")
	public ResponseEntity<?> deleteCustomer(@PathVariable int id, @PathVariable String token) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			Customer c = admin.getOneCustomer(id);
			admin.deleteCustomer(id);
			return ResponseEntity
					.ok("A Customer named " + c.getFirstName() + " " + c.getLastName() + " was deleted successfully !");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	// returns all customers from DB using facade, in failure returns a message .
	@GetMapping("getAllCustomers/{token}")
	public ResponseEntity<?> getAllCustomers(@PathVariable String token) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(admin.getAllCustomers());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives a customer id from client and returns the corresponding customer using facade, in failure returns a message .
	@GetMapping("getOneCustomer/{id}/{token}")
	public ResponseEntity<?> getOneCustomer(@PathVariable int id, @PathVariable String token) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(admin.getOneCustomer(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	// receives a customer email from client and returns the corresponding customer using facade, in failure returns a message .
	@GetMapping("getCustomerByEmail/{email}/{token}")
	public ResponseEntity<?> getOneCustomer(@PathVariable String email, @PathVariable String token) {
		try {
			AdminFacade admin = (AdminFacade) checkSession(token).getFacade();
			return ResponseEntity.ok(admin.getOneCustomer(email));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	// receives the user token and uses it to fetch its corresponding session. if no session is
	// found or, if 30 mins have passed since the last session check, throws an
	// exception.
	// returns the validated session with a timestamp.
	// this test will be used in every controller method to validate if user is
	// logged in and active using the token he received upon login.
	public OurSession checkSession(String token) throws NoSessionFoundException, SessionTimeOutException {
		OurSession session = sessions.get(token);
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
