import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'models/employee';

import { TravelRequest } from 'models/travelRequest';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-add-req',
  templateUrl: './add-req.component.html',
  styleUrls: ['./add-req.component.css']
})
export class AddReqComponent {
  newRequest: TravelRequest;
  employees: Employee[] = [];

  constructor(private router: Router, private service: ApiServiceService) {
    this.newRequest = {
      requestId: 0,
      employeeId: 0,
      fromLocation: '',
      toLocation: '',
      requestDate: new Date(),
      approveStatus: 'Pending',
      bookingStatus: 'Pending',
      currentStatus: 'Open'
    };
  }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
      },
      error => console.log(error)
    );
  }

  addRequest(formValues: NgForm) {
    this.service.addRequest(this.newRequest).subscribe(
      data => this.newRequest = data,
      error => console.log(error)
    );
    console.log(this.newRequest);
  }
}
