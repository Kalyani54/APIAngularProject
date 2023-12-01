import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lstemployee } from 'models/lstEmployee';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-detail-emp',
  templateUrl: './detail-emp.component.html',
  styleUrls: ['./detail-emp.component.css']
})
export class DetailEmpComponent implements OnInit{
  allEmployees:lstemployee=new lstemployee();
  thisEmp:any;
  id:number=0;
 
  constructor(private activatedRoute:ActivatedRoute,
    private service:ApiServiceService){
    
  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
 
   
    this.service.getDetailEmp(this.id).subscribe(data=>this.thisEmp=data)
  }
}
