import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Event } from '../common/event';
import { EventCategory } from '../common/event-category';


@Injectable({
  providedIn: 'root'
})
export class EventCategoryService {
  constructor(private http: HttpClient) { }


  getEventCategories() {
    //http://localhost:8181/api/event-category
    const url = 'http://localhost:8181/api/event-category';
    return this.http
      .get<GetResponseEventCategory>(url)
      .pipe(map((response) => response._embedded.eventCategory));
  }


  createEventCategory(eventCategory: EventCategory){
    const url = 'http://localhost:8181/api/event-category';
    return this.http.post<EventCategory>(url, eventCategory);
  }
  deleteEventCategory(id : number){
    const url = 'http://localhost:8181/api/event-category/'+id;
    return this.http.delete<EventCategory>(url);
  }

  getEventCategory(id: number){
    const url = 'http://localhost:8181/api/event-category/'+id;
    return this.http.get<EventCategory>(url);

  }

  updateEventCategory(id:number, eventCategory: EventCategory){
    const url = 'http://localhost:8181/api/event-category/'+id;
    return this.http.put<EventCategory>(url, eventCategory);

  }

}


interface GetResponseEventCategory {
  _embedded: {
    eventCategory: EventCategory[];
  };
}

