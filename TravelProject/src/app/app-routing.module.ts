import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { DetailEmpComponent } from './employee/detail-emp/detail-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './employee/delete-emp/delete-emp.component';
import { ViewReqComponent } from './travel/view-req/view-req.component';
import { AddReqComponent } from './travel/add-req/add-req.component';
import { EditReqComponent } from './travel/edit-req/edit-req.component';
import { DeleteReqComponent } from './travel/delete-req/delete-req.component';
import { HomeComponent } from './home/home.component';
import { ApproveReqComponent } from './travel/approve-req/approve-req.component';
import { BookReqComponent } from './travel/book-req/book-req.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"addEmployee",component:AddEmpComponent},
{ path: 'listEmployees', component: ViewEmployeeComponent },
{path:"detail/:id",component:DetailEmpComponent},
{path:"edit/:id",component:EditEmpComponent},
{path:"delete/:id",component:DeleteEmpComponent},


{ path: 'listRequest', component: ViewReqComponent },
{path:"addRequest",component:AddReqComponent},
{path:"editRequest/:id",component:EditReqComponent},
{path:"deleteRequest/:id",component:DeleteReqComponent},
{path:"approveStatus/:id",component:ApproveReqComponent},
{path:"bookingStatus/:id",component:BookReqComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
