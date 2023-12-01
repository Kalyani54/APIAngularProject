import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelRequest } from 'models/travelRequest';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-book-req',
  templateUrl: './book-req.component.html',
  styleUrls: ['./book-req.component.css']
})
export class BookReqComponent implements OnInit{
  requestId: number=0;
  travelRequest: TravelRequest = new TravelRequest;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.requestId = +this.activatedRoute.snapshot.params['id'];
    this.apiService.getRequestById(this.requestId).subscribe(
      (data: TravelRequest) => {
        this.travelRequest = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  canBook(): boolean {
    return this.travelRequest.approveStatus === 'Approved';
  }

  updateBookingStatus() {
    if (this.canBook()) {
      this.apiService.updateApprovalStatus(this.travelRequest).subscribe(
        () => {
          this.router.navigate(['/listRequest']);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert('Cannot book. Approval status is not "Approved".');
    }
  }
}
