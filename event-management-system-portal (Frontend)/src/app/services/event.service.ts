import { HttpClient } from '@angular/common/http';
import { Event } from '../common/event';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient ) { }

  //get all event details

  getEventList(){
    const url = 'http://localhost:8181/api/events';
    return this.http
    .get<GetResponseEvents>(url)
    .pipe(map((response) => response._embedded.events));
  }

  //add event details
  createEvent(id:number, event: Event){
    const url = 'http://localhost:8181/api/v1/category/' + id + '/events';
    return this.http.post<Event>(url, event);
  }
}  
  interface GetResponseEvents {
    _embedded: {
      events: Event[];
    }
    
  }

