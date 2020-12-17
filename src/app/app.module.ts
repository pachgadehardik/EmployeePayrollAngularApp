import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from 'src/component/add-employee/add-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from 'src/service/employee.service';
import { GetEmployeeComponent } from 'src/component/get-employee/get-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/component/login/login.component';
import { AuthguardGuard } from 'src/service/authguard.guard';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    GetEmployeeComponent,
    AddEmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  providers: [EmployeeService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
