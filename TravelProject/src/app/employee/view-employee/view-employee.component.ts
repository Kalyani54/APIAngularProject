import { Component, OnInit } from '@angular/core';
import { Employee } from 'models/employee';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{
  // employeeList: Employee[] = [];
  employeeList:any;

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => {
      this.employeeList = data;
    //  console.log(data);
    });
    console.log(this.employeeList);
    

   
  }


  trackByEmployeeId(index: number, employee: Employee): number {
    return employee.employeeId;
  }
}
