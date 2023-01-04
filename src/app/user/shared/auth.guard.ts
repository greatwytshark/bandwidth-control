import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){}

  canActivate(): boolean {
    if(this.userService.loggedIn()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
