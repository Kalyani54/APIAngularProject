import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailEmpComponent } from './detail-emp/detail-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';




@NgModule({
  declarations: [
    AddEmpComponent,
    ViewEmployeeComponent,
    DetailEmpComponent,
    DeleteEmpComponent,
    EditEmpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class EmployeeModule { }
