import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelRequest } from 'models/travelRequest';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-edit-req',
  templateUrl: './edit-req.component.html',
  styleUrls: ['./edit-req.component.css']
})
export class EditReqComponent implements OnInit{
  newReq:TravelRequest=new TravelRequest;
  id:number=0;
  index:number=-1;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private service:ApiServiceService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.getDetailRequest(this.id).subscribe(
      data=>this.newReq=data,
      error=>console.log(error)
     
    );
  }
  editRequest(){
 
    this.service.editRequest(this.id,this.newReq).subscribe(
      data=>console.log(data),
      error=>console.log(error)
     
    );
    location.href='/listRequest';
    }
  
}
