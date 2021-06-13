import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  user = {
    email:'',
    password:''
  }
  

  userLogin(){
    this.auth.userLogin(this.user)
    .subscribe(
      req=>{
        localStorage.setItem('token',req.token)
        this.router.navigate(['/']);
      }
    )
  }

}
