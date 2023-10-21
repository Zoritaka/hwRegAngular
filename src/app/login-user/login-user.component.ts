import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent {
  form!:FormGroup;
  
  constructor(
    private httpClient:HttpClient,
    public formBuilder:FormBuilder
    ) {
      this.form = this.formBuilder.group({
        login: [""],
        password:[""]
      });
    }
  
  login!: string;
  password!: any;

  info!:object;
  data!:string;
  
  onSubmit() {
    this.httpClient.get('https://api.nancydrew.me/authUser?key=X9ZO2Lqf&login=' + this.login + '&password=' + this.password).subscribe(
      (response)=> this.data = JSON.stringify(response)
      )
    alert(this.data)
  }
}