import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full'},
  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/:id', component: DepartmentDetailComponent, 
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ] 
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent} //always at the end.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//we include every new component here. we have to import it only in this file.
//and then we import routingComponents only in the declarations: in the app.module.ts file.
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent, PageNotFoundComponent, DepartmentOverviewComponent, DepartmentContactComponent]