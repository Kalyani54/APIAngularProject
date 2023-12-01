import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lstemployee } from 'models/lstEmployee';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {
  id: number = -1;
  index: number = -1;
  err: string = '';
  allEmployees: lstemployee = new lstemployee();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ApiServiceService) { }

  ngOnInit() {
    //console.log(this.allEmployees.lstEmp);
    this.id = this.activatedRoute.snapshot.params['id'];

    this.service.deleteEmployee(this.id).subscribe(data => location.href = '/listEmployees', error => { this.err = error.error; console.log(this.err) });


  }

}
