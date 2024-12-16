package com.edubridge.events.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.events.entity.Event;
import com.edubridge.events.service.EventCategoryService;





@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EventCategoryController {
	
	@Autowired
	private EventCategoryService eventCategoryService;
	/*
	 http://localhost:8181/api/v1/category/1/events 
	 */
	
	@PostMapping("/category/{categoryId}/events")
	public ResponseEntity<Event> addEventToCategory(
			@PathVariable Long  categoryId, @RequestBody Event event){
		
		eventCategoryService.addEventToCategory(categoryId, event);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
