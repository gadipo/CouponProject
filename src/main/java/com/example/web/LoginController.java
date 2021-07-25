package com.example.web;

import java.sql.SQLException;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exceptions.BeanNotFoundException;
import com.example.exceptions.LoginException;
import com.example.login.ClientType;
import com.example.login.LoginManager;
import com.example.services.ClientFacade;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
@RequestMapping("login")
public class LoginController {

	private LoginManager manager;

	@Autowired
	private Map<String, Session> sessions;

	public LoginController(LoginManager manager) {
		super();
		this.manager = manager;
	}

	// receives user details from client side, authenticates it, produces a unique
	// token and couples it with the corresponding client facade, saves it into a
	// map and sends back the token to user upon success.
//	@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
	@GetMapping("{email}/{password}/{type}")
	public ResponseEntity<?> login(@PathVariable String email, @PathVariable String password,
			@PathVariable ClientType type) {
		try {
			// user authentication
			ClientFacade facade = manager.Login(email, password, type);
			String token = UUID.randomUUID().toString();
			// couples unique token with the right facade and saves them into a global map. this is called a session.
			sessions.put(token, new Session(facade, System.currentTimeMillis()));
			// returns the unique token to user. In the client side this token will be saved in the sessionStorage using ts.
			return ResponseEntity.ok(token);
		} catch (LoginException | SQLException | BeanNotFoundException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
		}
	}

	// receives the unique user token and deletes the session.
	@GetMapping("logout/{token}")
	public ResponseEntity<?> logout(@PathVariable String token) {
		sessions.remove(token);
		return ResponseEntity.ok("logged out !");
	}
}
