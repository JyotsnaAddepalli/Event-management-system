package com.edubridge.events.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.events.repo.EventRepository;




@Service
public class EventService {
	@Autowired
	private EventRepository repo;


}
