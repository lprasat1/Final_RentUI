import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookhistory',
  templateUrl: './bookhistory.component.html',
  styleUrls: ['./bookhistory.component.sass']
})
export class BookhistoryComponent implements OnInit {

  constructor(private configService: ConfigService,private router: Router) { }

  ngOnInit() {
  }
  show: boolean = false;
  
    onSubmit() {
      
      
     // this.show = true;
      // console.log(request);
      //this.router.navigate(['/bookhistory']);

      //this.configService.createRequest(request).subscribe((res)=>{
      // console.log("Created a customer", res);
     //}

      this.configService.getRequest().subscribe((res)=>{
       console.log("Created a customer", res);
        }
      ,
  error  => {
    this.show = true;
    this.router.navigate(['/bookhistory']);
  console.log("Error", error);
  }
);
 
    }
}
