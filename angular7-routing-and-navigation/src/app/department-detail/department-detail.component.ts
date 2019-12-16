import { Component, OnInit } from '@angular/core';

//importing ActivatedRoute so we can grab the id from the URL.
//Router so we can change page
//ParamMap so we can use Observable approach.
import { ActivatedRoute , Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}. </h3>
    
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    
    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  //variable to keep the ID from the URL.
  public departmentId;

  //after we import ActivatedRoute, we inject in in the constructor so we can use it as a variable.
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //like this the view doesn't change.. snapshot approach won't work.
    //because it uses the same component and ngOnInit won't be called.
    // let id= parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId=id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id; 
      }
    )
  }

  goPrevious(){    
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    //changing to relative navigation.
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
