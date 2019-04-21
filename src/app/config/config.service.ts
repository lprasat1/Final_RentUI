import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../modal/request';
import { RegisterUser } from '../modal/RegisterUser';
import { bookrequest } from '../modal/bookrequest';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiURL: string = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  //public createRequest(request: Request){}

  public createRequest(req: RegisterUser){
    return this.httpClient.post(`${this.apiURL}/registerUser`,req);
}

public getRequest(){
  return this.httpClient.get(`http://localhost:8989/mentorportal/skillTechService/skillstech/hello`);
}
public validateLogin(request: Request){
  
  return this.httpClient.post(`${this.apiURL}/validateLogin`,request);
}

}