import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  constructor(
  ) {}

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);
  }

}
