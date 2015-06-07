package com.app.service;

import java.util.List;

import com.app.entity.User;

public interface UserService {
	
	//save user to db.
	public void save(User user);

	//Get list of user.
	public List<User> findAll();

	public void update(User user);
	
	//remove User.
	public void removeUser(User user);

}
