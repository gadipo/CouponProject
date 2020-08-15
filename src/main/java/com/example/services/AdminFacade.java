package com.example.services;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.example.beans.Company;
import com.example.beans.Coupon;
import com.example.beans.Customer;
import com.example.exceptions.AddCompanyException;
import com.example.exceptions.LoginException;
import com.example.exceptions.UpdateCompanyException;

import com.example.exceptions.BeanNotFoundException;
import com.example.exceptions.EmailTakenException;

@Service
@Scope("prototype")
public class AdminFacade extends ClientFacade {

	// the password and email for Administrator are hard coded
	@Override
	public boolean login(String email, String password) throws LoginException, SQLException {
		if (email.equalsIgnoreCase("admin@admin.com") && password.equalsIgnoreCase("admin")) {

			return true;

		} else
			throw new LoginException();
	}

	// receives a company object, checks for pre existing names and emails and saves
	// the company into DB
	public void addCompany(Company company) throws AddCompanyException, SQLException {
		for (Company c : compDB.findAll()) {
			if (c.getName().equalsIgnoreCase(company.getName()) | c.getEmail().equalsIgnoreCase(company.getEmail())) {
				throw new AddCompanyException();
			}
		}
		compDB.save(company);
	}

	// receives a company object, checks for pre existing email names and updates
	// the company in the DB
	public void updateCompany(Company company)
			throws SQLException, UpdateCompanyException, BeanNotFoundException, EmailTakenException {
		// first, we extract the pre-updated company from DB according to a
		// non-updatable attribute which is the id, and save it into a local reference.
		Company company1 = compDB.findById(company.getId()).orElseThrow(BeanNotFoundException::new);
		List<Company> allCompanies = compDB.findAll();
		// in order to check for taken email names by other companies, we remove the
		// received company from the list, and only then run through it.
		allCompanies.remove(company1);
		for (Company c : allCompanies) {
			if (c.getEmail().equalsIgnoreCase(company.getEmail())) {
				throw new EmailTakenException();
			}
		}
		/*
		 * updating local reference according to company given from client side, we
		 * update this reference and send to DB in order to avoid name updating. (a
		 * company is not allowed to change its name).
		 */
		company1.setEmail(company.getEmail());
		company1.setPassword(company.getPassword());
		company1.setCoupons(company.getCoupons());
		// saving into DB
		compDB.save(company1);
	}

	// check if company exists in DB, runs through all of its coupons and deletes
	// their purchase history, and only then deletes the company from DB.
	public void deleteCompany(int id) throws SQLException, BeanNotFoundException {
		Company c = compDB.findById(id).orElseThrow(BeanNotFoundException::new);
		List<Coupon> companyCoupons = c.getCoupons();
		for (Coupon coupon : companyCoupons) {
			coupDB.deleteCouponPurchases(coupon.getId());
		}
		compDB.deleteById(id);
	}

	// returns a list of all companies in DB
	public List<Company> getAllCompanies() throws SQLException {
		return compDB.findAll();
	}

	// finds a company in DB according to its unique ID and returns it
	public Company getOneCompany(int id) throws SQLException, BeanNotFoundException {
		return compDB.findById(id).orElseThrow(BeanNotFoundException::new);
	}

	// finds a company in DB according to its unique EMAIL and returns it
	public Company getOneCompany(String email) throws SQLException, BeanNotFoundException {
		return compDB.findByEmail(email).orElseThrow(BeanNotFoundException::new);
	}

	// receives a customer object, checks for pre existing emails and saves the
	// customer into DB
	public void addCustomer(Customer customer) throws SQLException, EmailTakenException {
		for (Customer c : cusDB.findAll()) {
			if (c.getEmail().equalsIgnoreCase(customer.getEmail())) {
				throw new EmailTakenException();
			}
		}
		cusDB.save(customer);
	}

	// receives a customer object, checks for pre existing emails and updates the
	// customer in the DB
	public void updateCustomer(Customer customer) throws SQLException, BeanNotFoundException, EmailTakenException {
		// first, we extract the pre-updated customer from DB according to a
		// non-updatable attribute which is the id, and save it into a local reference.
		Customer cust = cusDB.findById(customer.getId()).orElseThrow(BeanNotFoundException::new);
		List<Customer> customers = cusDB.findAll();
		// in order to check for taken email names by other customers, we remove the
		// received customer from the list, and only then run through it.
		customers.remove(cust);
		for (Customer c : customers) {
			if (customer.getEmail().equalsIgnoreCase(c.getEmail())) {
				throw new EmailTakenException();
			}
		}
		// saving into DB
		cusDB.save(customer);

	}

	// check if customer exists in DB, deletes his/her purchase history, and only
	// then deletes the customer from DB.
	public void deleteCustomer(int customerId) throws SQLException, BeanNotFoundException {
		Customer customer = cusDB.findById(customerId).orElseThrow(BeanNotFoundException::new);
		coupDB.deleteCustomerPurchases(customerId);
		cusDB.deleteById(customerId);

	}

	// returns a list of all customers in DB
	public List<Customer> getAllCustomers() throws SQLException {
		return cusDB.findAll();
	}

	// finds a customer in DB according to its unique ID and returns it
	public Customer getOneCustomer(int customerId) throws SQLException, BeanNotFoundException {
		return cusDB.findById(customerId).orElseThrow(BeanNotFoundException::new);
	}

	// finds a customer in DB according to its unique EMAIL and returns it
	public Customer getOneCustomer(String email) throws SQLException, BeanNotFoundException {
		return cusDB.findByEmail(email).orElseThrow(BeanNotFoundException::new);
	}
}
