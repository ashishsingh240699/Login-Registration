import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private snack:MatSnackBar,private reg:BackendService,private route:Router) {}
  data={
    username:"",
    password:"",
  }

  loginForm(){
   this.reg.loginReq(this.data).subscribe(
      (response: any)=>{
        console.log(response)
        this.snack.open("login sucessfully","ok")
        this.route.navigate(["/registration"])
      },
      
      (error: any) =>{
      console.log(error)
      this.snack.open("userName or password not correct","cancel")
      this.route.navigate(["/login"])
    }
    )
  }

}


