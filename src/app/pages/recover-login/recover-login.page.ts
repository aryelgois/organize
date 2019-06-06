import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NavController, ToastController } from '@ionic/angular';

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
    private navCtrl: NavController,
    private toastCtrl: ToastController,
  ) {}

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.recoverLoginForm.invalid) {
      return;
    }

    console.log(this.recoverLoginForm.value);

    this.presentToast({ message: 'Logo enviaremos um email, por favor confira sua caixa de entrada' });

    this.navCtrl.back();
  }

  private async presentToast(options: any) {
    const toast = await this.toastCtrl.create({
      duration: 10000,
      closeButtonText: 'Entendi',
      showCloseButton: true,
      ...options,
    });

    return toast.present();
  }

}
