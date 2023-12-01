import { Component } from '@angular/core';
import { TravelRequest } from 'models/travelRequest';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-view-req',
  templateUrl: './view-req.component.html',
  styleUrls: ['./view-req.component.css']
})
export class ViewReqComponent {
  reqList:any;

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.service.getRequest().subscribe(data => {
      this.reqList = data;
     console.log(data);
    });
    console.log(this.reqList);
    

   
  }


  trackByEmployeeId(index: number, travelRequest: TravelRequest): number {
    return travelRequest.requestId;
  }
}
