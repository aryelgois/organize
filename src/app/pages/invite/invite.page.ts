import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {

  inviteForm = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    message: new FormControl('', [
      Validators.maxLength(500),
    ]),
  });

  constructor(
  ) {}

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.inviteForm.invalid) {
      return;
    }

    console.log(this.inviteForm.value);
  }

}
