package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.User;
import com.app.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRegistory;
	
	@Override
	public void save(User user) {
		userRegistory.save(user);
	}

	@Override
	public List<User> findAll() {
		return (List<User>) userRegistory.findAll();
	}

	@Override
	public void update(User user) {
		userRegistory.save(user);
	}

	@Override
	public void removeUser(User user) {
		userRegistory.delete(user);
	}
}
