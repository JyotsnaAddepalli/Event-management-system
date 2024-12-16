package com.edubridge.events.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.edubridge.events.entity.Event;


@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

}