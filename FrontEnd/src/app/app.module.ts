import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { NavbvarComponent } from './navbvar/navbvar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from './material.module';
import { MeetingItemComponent } from './meeting-item/meeting-item.component';



@NgModule({
  declarations: [
    AppComponent,
    MeetingListComponent,
    CreateMeetingComponent,
    NavbvarComponent,
    LoginComponent,
    RegisterComponent,
    MeetingItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
     FormsModule,
     BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
