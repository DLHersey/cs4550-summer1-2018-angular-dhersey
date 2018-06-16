import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from "@angular/forms";
import {CourseGridComponent} from "./course-grid/course-grid.component";
import {WhiteBoardComponent} from "./white-board/white-board.component";
import {CourseServiceClient} from "./services/course.service.client";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseGridComponent,
    WhiteBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
