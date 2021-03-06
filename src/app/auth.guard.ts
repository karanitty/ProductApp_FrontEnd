import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private route:Router){}

  canActivate():boolean{
    if(this.auth.loggedIn()){
      return true;
    }
    else{
      this.route.navigate(['products'])
      return false;
    }
  }
  
}
