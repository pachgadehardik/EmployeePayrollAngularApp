import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee = [];
  
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
   
  }
}
