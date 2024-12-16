import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCategory } from '../../common/event-category';
import { EventCategoryService } from '../../services/event-category.service';

@Component({
  selector: 'app-event-category-edit',
  standalone: false,
  
  templateUrl: './event-category-edit.component.html',
  styleUrl: './event-category-edit.component.css'
})
export class EventCategoryEditComponent {
  categoryFormGroup: FormGroup;

  eventCategory: EventCategory = new EventCategory();
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private eventCategoryService: EventCategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){ }

  ngOnInit(){
    this.categoryFormGroup = this.formBuilder.group({
      category: this.formBuilder.group({
        categoryName: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
      }),
    });

    //read id given in eventCategoryEditComponent route
    this.id = this.activatedRoute.snapshot.params['id']

    this.eventCategoryService.getEventCategory(this.id)
    .subscribe((data) => {
      this.eventCategory = data;
      console.log(this.eventCategory);
    })
  }

  get categoryName(){
    return this.categoryFormGroup.get('category.categoryName')
  }

  onSubmit(){
    if (this.categoryFormGroup.invalid){
      this.categoryFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
  }

  if (confirm('Are you sure to update?')){

  

  this.eventCategoryService.updateEventCategory(this.id, this.eventCategory).subscribe((data) => {
    alert("Event details are updated!");
    this.router.navigateByUrl('/event-category-list');

  });

}
}
}