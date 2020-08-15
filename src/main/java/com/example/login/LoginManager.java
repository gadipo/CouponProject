package com.example.login;

import java.sql.SQLException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Component;

import com.example.exceptions.BeanNotFoundException;
import com.example.exceptions.LoginException;
import com.example.services.AdminFacade;
import com.example.services.ClientFacade;
import com.example.services.CompanyFacade;
import com.example.services.CustomerFacade;

import javassist.expr.Instanceof;

@Component
public class LoginManager {

	@Autowired
	private ConfigurableApplicationContext ctx;

	// checks to see authenticity of email/password and if client is present in DB, in success returns the corresponding Business Logic(facade) 
	public ClientFacade Login(String email, String password, ClientType clientType)
			throws LoginException, SQLException, BeanNotFoundException {
		switch (clientType) {
		case Administrator:

			AdminFacade admin = ctx.getBean(AdminFacade.class);
			if (admin.login(email, password) == true) {
				return admin;
			}
			break;
		case Company:
			CompanyFacade compF = ctx.getBean(CompanyFacade.class);
			if (compF.login(email, password) == true) {
				return compF;
			}
			break;
		case Customer:
			CustomerFacade cusF = ctx.getBean(CustomerFacade.class);
			if (cusF.login(email, password) == true) {
				return cusF;
			}
			break;
		}
		return null;

	}

	public LoginManager() {
	}

}
