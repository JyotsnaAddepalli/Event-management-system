import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventCategoryCreateComponent } from './components/event-category-create/event-category-create.component';
import { EventCategoryEditComponent } from './components/event-category-edit/event-category-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { EventCategoryListComponent } from './components/event-category-list/event-category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventCreateComponent,
    EventCategoryCreateComponent,
    EventCategoryEditComponent,
    EventCategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
