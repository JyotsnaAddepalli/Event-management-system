import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventCategoryCreateComponent } from './components/event-category-create/event-category-create.component';
import { EventCategoryEditComponent } from './components/event-category-edit/event-category-edit.component';
import { EventCategoryListComponent } from './components/event-category-list/event-category-list.component';

const routes: Routes = [
  { path: 'event-list', component: EventListComponent }
  ,{ path: 'event-create', component: EventCreateComponent }
  ,{ path: 'event-category-create', component: EventCategoryCreateComponent }
  ,{ path: 'event-category-edit/:id', component: EventCategoryEditComponent },
  {path:'event-category-list',component:EventCategoryListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
