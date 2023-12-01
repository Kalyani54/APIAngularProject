import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelRequest } from 'models/travelRequest';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-approve-req',
  templateUrl: './approve-req.component.html',
  styleUrls: ['./approve-req.component.css']
})
export class ApproveReqComponent {
  requestId: number = 0;
  travelRequest: TravelRequest = new TravelRequest;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.requestId = +this.activatedRoute.snapshot.params['id'];
    this.apiService.getRequestById(this.requestId).subscribe(
      (data: TravelRequest) => {
        this.travelRequest = data;
      }
    );
  }

  updateApprovalStatus() {
    if (this.travelRequest.approveStatus !== 'Approved') {
      this.travelRequest.bookingStatus = ' - ';
      this.travelRequest.currentStatus = 'Close';
    }

    this.apiService.updateApprovalStatus(this.travelRequest).subscribe(
      () => {
        this.router.navigate(['/listRequest']);
      }
    );
  }
}
