import { Injectable } from '@angular/core';

//import HttpClient so we can send submit form to a server with 
//an http request.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
//importing catchError and throwError in case the server doesn't respond.
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url='http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  enroll(user: User){
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
