import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-request',
  templateUrl: './book-request.component.html',
  styleUrls: ['./book-request.component.sass']
})
export class BookRequestComponent implements OnInit {

  constructor(private configService: ConfigService,private router: Router) { }
  data: any = {
    place: '',
    date:'',
    time:''
  };

  ngOnInit() {
  }

  show: boolean = false;
  
    onSubmit() {
      //alert(  JSON.stringify(this.data));
      var request = {
        "place": this.data.place,
        "date": this.data.date,
        "time": this.data.time
      }
      
      this.show = true;
      console.log(request);
      this.router.navigate(['/bookhistory']);

      //this.configService.createRequest(request).subscribe((res)=>{
      // console.log("Created a customer", res);
     //}

      /*this.configService.getRequest(request).subscribe((res)=>{
         console.log("Created a customer", res);
        }
      ,
  error  => {
  console.log("Error", error);
  }
);*/



      
    }

}
