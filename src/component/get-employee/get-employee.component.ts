import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.scss']
})
export class GetEmployeeComponent implements OnInit {

  employee = [];
  
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.employeeService.getData()
      .subscribe(response => {
        console.log("response " + JSON.stringify(response))
        this.employee = response.empList;
      },
        error => {
          console.log(error);
        }
      )
  }

  

}
