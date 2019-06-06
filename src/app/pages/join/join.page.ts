import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NavController, ToastController } from '@ionic/angular';

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
    private navCtrl: NavController,
    private toastCtrl: ToastController,
  ) {}

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.joinForm.invalid) {
      return;
    }

    console.log(this.joinForm.value);

    this.presentToast({ message: 'Enviamos um email de confirmação, confira sua caixa de entrada' });

    this.navCtrl.navigateRoot(['/lists']);
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
