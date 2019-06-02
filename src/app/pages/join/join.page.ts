import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {

  joinForm = new FormGroup({
    name: new FormControl('', [
      Validators.maxLength(30),
      Validators.required,
    ]),
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
    if (this.joinForm.invalid) {
      return;
    }

    console.log(this.joinForm.value);
  }

}
