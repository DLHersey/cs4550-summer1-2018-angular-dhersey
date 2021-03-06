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
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import {ModuleListComponent} from "./module-list/module-list.component";
import {LessonTabsComponent} from "./lesson-tabs/lesson-tabs.component";
import {WidgetListComponent} from "./widget-list/widget-list.component";
import {ModuleServiceClient} from "./services/module.service.client";
import {WidgetServiceClient} from "./services/widget.service.client";
import {LessonServiceClient} from "./services/lesson.service.client";
import {SectionServiceClient} from "./services/section.service.client";
import {SectionListComponent} from "./section-list/section-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseGridComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    SectionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    ModuleServiceClient,
    WidgetServiceClient,
    LessonServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
