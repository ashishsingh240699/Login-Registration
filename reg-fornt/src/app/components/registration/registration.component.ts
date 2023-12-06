import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscriber } from 'rxjs';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

data={
  name:"",
  fatherName:"",
  mobile:"",
  college:"",
  email:"",
  username:"",
  password:"",
}
constructor(private reg:BackendService,private snack:MatSnackBar){}

  doFormSubmit(){
    console.log("submit form");
    console.log("data" ,this.data);
    this.reg.sendReg(this.data).subscribe(
      (      response: any)=>{
        console.log(response)
        this.snack.open("Registration sucessfully","ok")
      },
      (      error: any) =>{
        console.log(error)
        this.snack.open("not registred","cancel")
      }
      
      
    )
  }

}
