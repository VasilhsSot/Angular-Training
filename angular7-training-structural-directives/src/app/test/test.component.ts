import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
          <!-- ngIf directive
          <h2 *ngIf="displayName; else elseBlock">
            Codevolution
          </h2>
          <ng-template #elseBlock>   if-else condition 
            <h2>
              Name is hidden
            </h2>
          </ng-template>
          
          <div *ngIf="displayName; then thenBlock; else elseBlock"> </div>

          <ng-template #thenBlock>
            <h2> Codevolution </h2>
          </ng-template>
          
          <ng-template #elseBlock>
            <h2> Hidden </h2>
          </ng-template> -->
          
          <!-- ngSwitch directive 
          <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'"> You picked red color </div>
            <div *ngSwitchCase="'blue'"> You picked blue color </div>
            <div *ngSwitchCase="'green'"> You picked green color </div>
            <div *ngSwitchDefault>Pick again.. </div>
          </div> -->
          
          <!-- ngFor directive 
          <div *ngFor="let color of colors; index as i">
            <h2>{{i}} {{color}}</h2>
          </div> -->

          ` ,
  styles: []
})
export class TestComponent implements OnInit {

  //for ngIf directive
  displayName=true;

  //for ngSwitch directive
  //public color="orange";

  //for ngFor directive (list rendering)
  public colors= ["red","blue","green","yellow"];

  constructor() { }

  ngOnInit() {
  }

}
