import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventCategory } from '../../common/event-category';
import { EventCategoryService } from '../../services/event-category.service';

@Component({
  selector: 'app-event-category-list',
  standalone: false,
  
  templateUrl: './event-category-list.component.html',
  styleUrl: './event-category-list.component.css'
})
export class EventCategoryListComponent {
  eventCategories: EventCategory[] =[]

  constructor(private eventCategoryService: EventCategoryService, private router: Router 

  )
  {}

  listEventCategories(){
    this.eventCategoryService.getEventCategories().subscribe((data) => {
      this.eventCategories = data;
      console.log(data);
    });
  }

  ngOnInit(){
    this.listEventCategories();
  }

  removeCategory(id: number){
    if(confirm('Are you sure to delete?')){
      this.eventCategoryService
      .deleteEventCategory(id).subscribe((data) =>{
        alert('Category is removed!');
        this.listEventCategories();
      });
    }
  }

  showEventCategoryEdit(id: number){
    this.router.navigate(['event-category-edit', id]);

  }

}
