import { Component } from '@angular/core';
//instead of FormGroup and FormControl, we import FormBuilder.
//also importing "Validators" for validation rules.
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator} from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //we import a FormBuilder object to the instructor so we 
  //can use it to create the form.
  constructor(private fb: FormBuilder){}

  //to sorten our code in the html.
  get userName(){
    return this.registrationForm.get('userName');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword');
  }

  title = 'angular7-reactive-forms';

  //with FormBuilder instead of FormGroup and FormControl.
  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/)]],  //the 1st element is the default value, the 2nd is the validation rule.
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],                       //we put the rules into array of rules.
    confirmPassword: ['',Validators.required], 
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  //creating new formgroup instance that represents the user
  //registration form.
  // with formGroup and formControl.
  // registrationForm = new FormGroup({
  //     userName: new FormControl(''),
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl(''),
  //     address: new FormGroup({
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       postalCode: new FormControl('')
  //     })
  //   });

  clearData(){
    this.registrationForm.patchValue({  //with setValue() we have to put
      userName: '',                //ALL fields, so no need to put 
      password: '',                 //address while using patchValue().
      confirmPassword: '',
      address: {city:'',state:'',postalCode:''}
    });
  }

}
