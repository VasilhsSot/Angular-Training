import { Component, OnInit } from '@angular/core';

//importing Router to use it on onSelect() method.
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
      <h3>
      Department List
      </h3>
      <ul class="items">
        <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
          <span class="badge">{{department.id}}</span>{{department.name}}
        </li>
      </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  //after we import Router, we inject it in the constructor to use it.
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id; 
      }
    )
  }

  onSelect(department){
    //this.router.navigate(['/departments', department.id]);
    //changing to relative navigation.
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
