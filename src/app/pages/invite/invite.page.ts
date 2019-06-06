import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NavController, ToastController } from '@ionic/angular';

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
    private navCtrl: NavController,
    private toastCtrl: ToastController,
  ) {}

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.inviteForm.invalid) {
      return;
    }

    console.log(this.inviteForm.value);

    this.presentToast({ message: 'Convite enviado' });

    this.navCtrl.back();
  }

  private async presentToast(options: any) {
    const toast = await this.toastCtrl.create({
      duration: 2000,
      ...options,
    });

    return toast.present();
  }

}
