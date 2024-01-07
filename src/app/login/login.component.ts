import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  username = "";
  password = "";
  errorMsg = "";

  constructor() {}

  ngOnInit(): void {

  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required"
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required"
    }
  }

}
