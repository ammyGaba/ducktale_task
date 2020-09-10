import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateToDoComponentComponent } from './create-to-do-component/create-to-do-component.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { DoneListComponent } from './done-list/done-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateToDoComponentComponent,
    ToDoListComponentComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
