import { Component, EventEmitter, OnInit } from '@angular/core';
import { EmployeeService } from 'src/service/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { GetEmployeeComponent } from '../get-employee/get-employee.component';
import { Input,Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    // console.log(this.loginForm.value)
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.login(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data.obj)
          localStorage.setItem('token',data.obj)
          if (data.statusCode == 200) {
            this.router.navigate(['home'])
          }
          else{
          alert("User Not Registered in DB")
          }
        },
        error => {
          console.log(error)
          this.router.navigate(['PagenotfoundComponent']);
        });
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}