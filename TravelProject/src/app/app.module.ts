import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiServiceService } from './api-service.service';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';
import { CommonModule } from '@angular/common';
import { AddReqComponent } from './travel/add-req/add-req.component';
import { TravelModule } from './travel/travel.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    EmployeeModule,
    TravelModule,
    
   
    CommonModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
