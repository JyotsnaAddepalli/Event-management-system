import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventCategoryService } from '../../services/event-category.service';
import { EventCategory } from '../../common/event-category';

@Component({
  selector: 'app-event-category-create',
  standalone: false,
  
  templateUrl: './event-category-create.component.html',
  styleUrl: './event-category-create.component.css'
})
export class EventCategoryCreateComponent {
  categoryFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private eventCategoryService: EventCategoryService,
    private router: Router
  ){ }

  ngOnInit(){
    this.categoryFormGroup = this.formBuilder.group({
      category: this.formBuilder.group({
        categoryName: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
      }),
    });
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

  let eventCategory = new EventCategory();

  eventCategory = this.categoryFormGroup.controls['category'].value;

  console.log(eventCategory);

  this.eventCategoryService.createEventCategory(eventCategory).subscribe((data) => {
    alert('New Category is added!');
    this.router.navigateByUrl('/event-category-list');

  });
}
}
