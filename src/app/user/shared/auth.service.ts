import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http/http';
import { UserService } from './user.service';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor{
  
  
  constructor() { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const idToken = localStorage.getItem("token");
  
  let jwtToken = req.clone({
    setHeaders: {
      Authorizatioin: "Bearer" + idToken
    }
  })
  return next.handle(jwtToken);

    
  
}
 
  
}
