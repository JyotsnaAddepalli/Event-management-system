import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../common/event';


@Component({
  selector: 'app-event-list',
  standalone: false,
  
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events: Event[]= [];

  constructor(private eventService: EventService){}

  listEvents(){
    this.eventService.getEventList().subscribe((data) => {
      this.events = data;
      console.log(data);

    });
  }
    ngOnInit() {
      this.listEvents();
    }
  }


