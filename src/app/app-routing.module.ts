import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from 'src/component/add-employee/add-employee.component';
import { GetEmployeeComponent } from 'src/component/get-employee/get-employee.component';
import { LoginComponent } from 'src/component/login/login.component';
import { PagenotfoundComponent } from 'src/component/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:"add", component:AddEmployeeComponent},
  {path:"home",component:GetEmployeeComponent},
  {path:"",component:LoginComponent},
  {path:"add/:id",component:AddEmployeeComponent},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
