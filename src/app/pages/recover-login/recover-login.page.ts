import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-login',
  templateUrl: './recover-login.page.html',
  styleUrls: ['./recover-login.page.scss'],
})
export class RecoverLoginPage implements OnInit {

  recoverLoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
  });

  constructor(
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    if (this.recoverLoginForm.invalid) {
      return;
    }

    console.log(this.recoverLoginForm.value);
  }

}
