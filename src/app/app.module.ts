import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from 'src/component/add-employee/add-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from 'src/service/employee.service';
import { GetEmployeeComponent } from 'src/component/get-employee/get-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    GetEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
