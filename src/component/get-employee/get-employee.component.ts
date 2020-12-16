import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.scss']
})
export class GetEmployeeComponent implements OnInit {

  employee = [];
  
  
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.employeeService.getData()
      .subscribe(response => {
        console.log("response " + JSON.stringify(response))
        this.employee = response.obj;
      },
        error => {
          console.log(error);
        }
      )
  }

  addEmployee(){
    this.router.navigate(['add'])
  }

  update(node){
    console.log(node.id)
    this.employeeService.getById(node.id).subscribe(response =>{
       response.obj
      console.log("inside")
      this.router.navigate(['add'], response.obj)
    }),
    error =>{
      console.log(error)
    }
    
  }

  delete(node){
    console.log(node.id)
    this.employeeService.delete(node.id).subscribe(response => {
      console.log(JSON.stringify(response))
      alert("Employee SuccessFully Deleted!")
      this.ngOnInit();
    }),
    error =>{
    console.log(error);
    }
  }

  logout(){
    localStorage.removeItem('token');
    console.log("Logout Called")
    this.router.navigate(['']);
  }



  

}
