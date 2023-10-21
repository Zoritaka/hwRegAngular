import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.css']
})
export class RegistrationUserComponent {
  name!:string
  login!:string;
  email!:any;
  password!:any
  data!:string

  constructor(
    private httpClient:HttpClient) {}
    OnSubmit() {
      const url = 'https://api.nancydrew.me/addUser?key=X9ZO2Lqf&login=' + this.login + '&password=' + this.password+ '&name='+this.name+'&email='+this.email + '&lang=kk'
      this.httpClient.get(url).subscribe((response) => this.data = JSON.stringify(response))
      alert(this.data)
}}