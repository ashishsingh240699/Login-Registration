import { Component ,OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent {
  data:any;

  constructor(private reg:BackendService, private snack:MatSnackBar){}
  ngOnInit():void{

  this.reg.getData(this.data).subscribe(
    (    Response: any)=>{
      console.log("hello",Response)
      this.data= Response;
    },
    (    error: any)=>{
      console.log(error)
      this.snack.open("not registred","cancel")
    }
    
  );
 
  }

}
