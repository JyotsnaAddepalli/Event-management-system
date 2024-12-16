package com.edubridge.events.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.edubridge.events.entity.EventCategory;

@CrossOrigin("http://localhost:4200")

@RepositoryRestResource(
		collectionResourceRel="eventCategory",path="event-category")
public interface EventCategoryRepository extends JpaRepository<EventCategory, Long> {

}
