package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.User;
import com.app.service.UserService;

@RestController
@RequestMapping(value="/api")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	/**
	 * Save user to database
	 */
	@RequestMapping(value="/save",method=RequestMethod.POST)
	public String saveUser(@RequestBody User user) {
		userService.save(user);
		return "success";
	}
	
	@RequestMapping(value="/getListOfUser",method=RequestMethod.GET)
	public List<User> getListOfUSer() {
		return userService.findAll();
	}
	
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public void updateUSer(@RequestBody User user) {
		userService.update(user);
		//return "success";
	}
	
	@RequestMapping(value="/delete", method=RequestMethod.POST) 
	public void removeUser(@RequestBody User user) {
		userService.removeUser(user);
	}
}
