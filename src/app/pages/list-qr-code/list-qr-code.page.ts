import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActionSheetController, ToastController } from '@ionic/angular';

import ClipboardJS from 'clipboard';

import QRCode from 'qrcode';

import { isSameUser, User } from '../../models/user';

@Component({
  selector: 'app-list-qr-code',
  templateUrl: './list-qr-code.page.html',
  styleUrls: ['./list-qr-code.page.scss'],
})
export class ListQrCodePage implements OnDestroy, OnInit {

  userIsOwner: boolean;

  isQrCodeEnabled: boolean;

  code: string;
  qrcode: string;

  clipboard: ClipboardJS;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController,
  ) {}

  ngOnInit() {
    if (this.code) {
      const url = 'http://example.com/lists?qrcode=' + this.code;

      QRCode.toString(url, { margin: 0 })
        .then((svg: string) => this.qrcode = 'data:image/svg+xml;base64,' + btoa(svg))
        .catch((err) => console.error(err));

      this.clipboard = new ClipboardJS('.clipboard', {
        text: () => this.code,
      })
        .on('success', () => this.presentToast({ message: 'Código copiado!'}))
        .on('error', () => this.presentToast({ message: 'Não foi possível copiar o código'}));
    }
  }

  ngOnDestroy() {
    this.clipboard.destroy();
  }

  async presentQrCodeOptions() {
    const buttons = [
      this.isQrCodeEnabled
        ? {
            text: 'Desativar código QR',
            icon: 'qr-code-off',
            handler: () => console.log('Desativar código QR'),
          }
        : {
            text: 'Ativar código QR',
            icon: 'qr-code',
            handler: () => console.log('Ativar código QR'),
          },
    ];

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Código QR',
      buttons,
    });

    return await actionSheet.present();
  }

  private async presentToast(options: any) {
    const toast = await this.toastCtrl.create({
      duration: 2000,
      ...options,
    });

    return toast.present();
  }

}
