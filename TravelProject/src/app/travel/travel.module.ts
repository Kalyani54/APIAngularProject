import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewReqComponent } from './view-req/view-req.component';
import { AddReqComponent } from './add-req/add-req.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditReqComponent } from './edit-req/edit-req.component';
import { DeleteReqComponent } from './delete-req/delete-req.component';
import { ApproveReqComponent } from './approve-req/approve-req.component';
import { BookReqComponent } from './book-req/book-req.component';


@NgModule({
  declarations: [
    ViewReqComponent,
    AddReqComponent,
    EditReqComponent,
    DeleteReqComponent,
    ApproveReqComponent,
    BookReqComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
   
    RouterModule,
  ]
})
export class TravelModule { }
