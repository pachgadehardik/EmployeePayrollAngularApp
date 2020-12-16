import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/service/employee.service';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeObj:any
  id:any
  edit = false
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: EmployeeService,
    private activatedRoute : ActivatedRoute
  ) {
    console.log("nside Const"+this.router.getCurrentNavigation().extras)
    this.employeeObj = this.router.getCurrentNavigation().extras;
  }
  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params.id;
    console.log("ID++++++"+this.id)
    
    this.registerForm = this.formBuilder.group({
      id:[],
      empName: ['', [Validators.required, Validators.minLength(2)]],
      salary: ['', [Validators.required, Validators.minLength(5)]],
      gender: [''],
      department: ['']
    });
    
    if(this.id!= undefined)
      this.getEmployeeById(this.id);
  }

  getEmployeeById(id: any) {
    console.log("ID is ::"+id)
     this.userService.getById(id).subscribe(response =>{
      console.log(response.obj)
      this.edit = true;
      this.registerForm.setValue(response.obj)
      this.router.navigate(['add'], response.obj)
    }),
    error =>{
      console.log(error)
    }
  }

  onSubmit() {
    console.log(this.registerForm.value)
    console.log(this.edit)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if(!this.edit){
    this.userService.post(this.registerForm.value)
      .subscribe(
        data => {
          console.log(data)
          if (data.statusCode == 400) {
            alert("This Employee Already Exists")
          }
          this.router.navigate(['home']);

        },
        error => {
          console.log("Inside Error")
          console.log(error)
        });
  }
  else{
    this.updateEmployee(this.registerForm.value);
  }
}

  updateEmployee(data){
    this.userService.update(data)
      .subscribe(
        data => {
          console.log(data)
          if (data.statusCode == 400) {
            alert("This Employee Already Exists")
          }
          this.router.navigate(['home']);

        },
        error => {
          console.log(error)
        });
  }

  getErrorForName(){
    return this.registerForm.get('empName').hasError('required') ? 'Name Should not be blank':
    this.registerForm.get('empName').hasError('minlength') ? 'Name Should Contain Min 2 chars':
    '';
  }

  getErrorForSalary(){
    return this.registerForm.get('salary').hasError('required') ? 'Salary Should not be blank':
    this.registerForm.get('salary').hasError('minlength') ? 'Salary Should Contain min 5 digits':
    '';
  }

  // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();
}
