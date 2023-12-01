import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'models/employee';
import { lstemployee } from 'models/lstEmployee';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  newEmployee:Employee;
  allEmp:lstemployee=new lstemployee;
  constructor(private router:Router, private service:ApiServiceService)
  {
     this.newEmployee={employeeId:0,employeeName:'',contact:'',dept:'',address:'',dob:new Date()}
  }
  addEmployee(formValues:NgForm)
  {
    this.service.addEmployee(this.newEmployee).subscribe(
     data=>this.newEmployee=data,error=>console.log(error)
    );
    location.href = '/listEmployees';
    console.log(this.newEmployee)
  }
}


 