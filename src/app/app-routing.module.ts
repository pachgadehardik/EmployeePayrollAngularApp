import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from 'src/component/add-employee/add-employee.component';
import { GetEmployeeComponent } from 'src/component/get-employee/get-employee.component';
import { PagenotfoundComponent } from 'src/component/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:"add", component:AddEmployeeComponent},
  {path:"",component:GetEmployeeComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
