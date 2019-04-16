import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private configService: ConfigService,
    private router: Router
  ) { }
  data: any = {
    login: '',
    password:''
  };
  show: boolean = false;
  

  ngOnInit() {
  }

  onSubmit() {
    //alert(  JSON.stringify(this.data));
    var req1 = {
      "login": this.data.login,
      "password": this.data.password
      
    }

    console.log(req1);

    this.configService.validateLogin(req1).subscribe((res)=>{
     console.log("Created a customer", res);
     }
   ,
   error  => {
   console.log("Error", error);
   
   if(error.error.text==="Login Successful"){
     this.router.navigate(['/select-service']);
   }else{
     this.show = true;
   }


   }
 );
}

}
