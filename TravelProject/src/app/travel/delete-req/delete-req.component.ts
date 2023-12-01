import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lstRequest } from 'models/lstRequest';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-delete-req',
  templateUrl: './delete-req.component.html',
  styleUrls: ['./delete-req.component.css']
})
export class DeleteReqComponent implements OnInit{
  id: number = -1;
  index: number = -1;
  err: string = '';
  allRequests: lstRequest = new lstRequest();
 
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ApiServiceService) { }
 
  ngOnInit() {
    //console.log(this.allEmployees.lstEmp);
    this.id = this.activatedRoute.snapshot.params['id'];
    //this.index = this.allEmployees.lstEmp.findIndex(g=>g.empId==this.id);
    this.service.deleteRequest(this.id).subscribe(data => location.href = '/listRequest', error => { this.err = error.error; console.log(this.err) });
 
    
  }
 
}
