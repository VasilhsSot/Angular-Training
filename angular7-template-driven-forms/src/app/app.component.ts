import { Component } from '@angular/core';
import { User } from './user';

//importing enrollment service and then inject it so we
//can use it in the method onSubmit().
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError=true;
  submitted=false;
  errorMsg='';
  
  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(value){
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this.submitted=true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe( 
      data => console.log ('Success', data),
      error => this.errorMsg = error.statusText
    )
  }

  userModel= new User('', '', 0, 'default','morning', false);
}
