import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login"; 
import { ConfigService } from '../config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  constructor(private configService: ConfigService,private router: Router) { }
  data: any = {
    mobileNumber: '',
    userName:'',
    emailId:'',
    state: '',
    district:'',
    pincode:'',
    village:''
  };
  show: boolean = false;
  resMsg: String = '';
  
    ngOnInit() {
        
    }
 
    onSubmit() {
      //alert(  JSON.stringify(this.data));
      var req = {
        "mobileNumber": this.data.mobileNumber,
        "userName": this.data.userName,
        "emailId": this.data.emailId,
        "state": this.data.state,
        "district": this.data.district,
        "pincode": this.data.pincode,
        "village": this.data.village
      }

      console.log(req);

      this.configService.createRequest(req).subscribe((res)=>{
       console.log("Created a customer", res);
       
     }
     ,
     error  => {
     console.log("Error", error);
     if(error.error.text === "Registered Successfully"){
       console.log(error.error.text);
       
       this.show= true;
       this.resMsg = error.error.text;
       this.router.navigate(['/']);
     }
     }
   );
  }
}
