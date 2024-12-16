package com.edubridge.events.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name="event")
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String eventType;
	private String eventTitle;
	private String eventAddress;
	private String eventDateTime;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name ="category id")
	private EventCategory category;

}
