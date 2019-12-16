import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <!-- pipes -->
      <h2>{{name}}</h2>
      <h2>{{name | uppercase}}</h2>
      <h2>{{name |slice:3:5}}</h2>
      <h2>{{message | titlecase}} </h2>
      <h2>{{person | json}}</h2>
      <h2>{{5.678 | number:'3.4-5'}}</h2> <!-- integerDigits.minDigits-maxDigits -->
      <h2>{{0.25 | percent}}</h2>
      <h2>{{date | date: 'short'}}</h2>
      
  `,
  styles: []
})
export class TestComponent implements OnInit {

  //for pipes
  public name = "Codevolution";
  public message = "welcome to codevolution";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
