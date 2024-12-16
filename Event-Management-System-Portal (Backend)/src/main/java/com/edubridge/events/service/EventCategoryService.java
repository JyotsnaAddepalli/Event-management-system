package com.edubridge.events.service;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.events.entity.Event;
import com.edubridge.events.entity.EventCategory;
import com.edubridge.events.repo.EventCategoryRepository;
import com.edubridge.events.repo.EventRepository;



@Service
public class EventCategoryService {
	@Autowired
	private EventCategoryRepository eventCategoryRepository;
	
	@Autowired
	private EventRepository eventRepository;
	
	public Event addEventToCategory(Long categoryId, Event event) {
		
		Optional<EventCategory>optional = eventCategoryRepository.findById(categoryId);
		
		if(optional.isPresent()) {
			EventCategory category = optional.get();
			event.setCategory(category);
			return eventRepository.save(event);
		}else {
			throw new RuntimeException("Category not found");
		}
	}
}