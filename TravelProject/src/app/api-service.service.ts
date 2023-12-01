import { Injectable } from '@angular/core';
import { Employee } from 'models/employee';
import { Observable, catchError, map, throwError } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { TravelRequest } from 'models/travelRequest';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  readonly apiUrl = 'https://localhost:44368/api/';

  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]>{
   // console.log("Hello");
    return this.http.get<any[]>(this.apiUrl + 'Employee').pipe(
      map((response: any) => response.$values as Employee[])
    );
  }
  addEmployee(newEmployee:Employee):Observable<Employee>
   {
    
     return this.http.post<Employee>(this.apiUrl+'Employee',newEmployee);
   }
   getDetailEmp(id:number):Observable<Employee>{
    return this.http.get<any>(this.apiUrl + 'Employee/'+id);
  }
  editEmp(id:number,newEmp:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.apiUrl + 'Employee/'+id,newEmp);
  }

  deleteEmployee(id:number):Observable<any>
  {
    return this.http.delete<any>(this.apiUrl + 'Employee/'+id);
  }

  getRequest():Observable<TravelRequest[]>{
    // console.log("Hello");
     return this.http.get<any[]>(this.apiUrl + 'Travel').pipe(
       map((response: any) => response.$values as TravelRequest[])
     );
   }
   addRequest(newRequest:TravelRequest):Observable<TravelRequest>
   {
    
     return this.http.post<TravelRequest>(this.apiUrl+'Travel',newRequest);
   }
   getDetailRequest(id:number):Observable<TravelRequest>{
    return this.http.get<any>(this.apiUrl + 'Travel/'+id);
  }
 
  editRequest(id:number,newReq:TravelRequest):Observable<TravelRequest>{
    return this.http.put<TravelRequest>(this.apiUrl + 'Travel/'+id,newReq);
  }

  deleteRequest(id:number):Observable<any>
  {
    return this.http.delete<any>(this.apiUrl + 'Travel/'+id);
  }

  getRequestById(requestId: number): Observable<TravelRequest> {
    return this.http.get<TravelRequest>(this.apiUrl+'Travel/'+requestId);
  }

  updateApprovalStatus(request: TravelRequest): Observable<TravelRequest> {
    return this.http.put<TravelRequest>(this.apiUrl+'Travel/'+request.requestId, request);
  }

}
