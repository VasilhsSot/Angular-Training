import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7-training-component-interaction';
  
  //for output to child component
  public name = "Vasilhs";
  public message="";
}
