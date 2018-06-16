import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from "@angular/forms";
import {CourseGridComponent} from "./course-grid/course-grid.component";
import {WhiteBoardComponent} from "./white-board/white-board.component";
import {CourseServiceClient} from "./services/course.service.client";
import {routing} from "./app.routing";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {UserServiceClient} from "./services/user.service.client";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseGridComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
