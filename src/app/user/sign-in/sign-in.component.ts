import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http/http';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formGroup!: FormGroup;
  isLoginError: boolean = false;

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  loginProcess(){
    if(this.formGroup.valid)
    this.userService.login(this.formGroup.value).subscribe((result: { jwtToken: string; })=>{
      this.router.navigate(['/bcp']);
     console.log(result)
     localStorage.setItem('token', result.jwtToken)
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
     
  }   

}
