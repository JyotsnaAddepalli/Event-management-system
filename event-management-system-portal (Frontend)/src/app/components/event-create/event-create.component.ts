import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from '../../common/event';
import { EventService } from '../../services/event.service';
import { EventCategoryService } from '../../services/event-category.service';
import { EventCategory } from '../../common/event-category';


@Component({
  selector: 'app-event-create',
  standalone: false,
  
  templateUrl: './event-create.component.html',
  styleUrl: './event-create.component.css'
})
export class EventCreateComponent {
  eventFormGroup: FormGroup
  eventCategories: EventCategory[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private eventCategoryService: EventCategoryService,
    private router: Router
  ){}


  ngOnInit(){
    this.eventFormGroup = this.formBuilder.group({
      event: this.formBuilder.group({
        eventType: ['', [Validators.required]],
        eventTitle: ['', [Validators.required]],
        eventAddress: ['', [Validators.required]],
        eventDateTime : ['', [Validators.required]],
        category: ['', [Validators.required]],
      }),
    });
    
  this.listEventCategories();
  }


  get eventType() {
    return this.eventFormGroup.get('event.eventType');
  }


  get eventTitle() {
    return this.eventFormGroup.get('event.eventTitle');
  }


  get eventAddress() {
    return this.eventFormGroup.get('event.eventAddress');
  }


  get eventDateTime() {
    return this.eventFormGroup.get('event.eventDateTime');
  }

  get category() {
    return this.eventFormGroup.get('event.category');
  }


  listEventCategories(){
    this.eventCategoryService.getEventCategories().subscribe((data) => {
      this.eventCategories= data;
      console.log(data)
    });
  }


  onSubmit(){
    if(this.eventFormGroup.invalid){
      this.eventFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }


    //if form is valid
    let event = new Event();
    event = this.eventFormGroup.controls['event'].value;


    this.eventService
    .createEvent(event.category.id,event)
    .subscribe((data) =>{
      alert('New event is added!');
      this.router.navigateByUrl('/event-list');
    });
  }
}

