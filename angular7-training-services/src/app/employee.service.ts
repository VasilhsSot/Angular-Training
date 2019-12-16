import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';

//importing catchError operator for http error handling
import {catchError } from 'rxjs/operators';
//importing throwError
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  //we Import IEmployee interface (that we created) to say how the data will be.
  //we use the Observable<IEmployee[]> to declare the form that our data will be. (an array of employees)
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error!")
  }
}
