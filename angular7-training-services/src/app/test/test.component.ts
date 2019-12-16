import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  template: `
          <h2>Employee List</h2>
          <h3>{{errorMsg}}</h3>
          <ul *ngFor="let employee of employees">
            <li>{{employee.name}}</li>
          </ul>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public employees = [];
  public errorMsg;

  //import the service through the constructor
  constructor(private _employeeService: EmployeeService) { }
  //and through the ngOnInit we create an instance of this service.
  //we use the _employeeService to fetch the JSON with subscribe().
  //and then transfer it to the employees[].
  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees=data,
               error => this.errorMsg=error);
  }

}
