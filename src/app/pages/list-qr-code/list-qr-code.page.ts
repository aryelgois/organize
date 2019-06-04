import { Component, OnDestroy, OnInit } from '@angular/core';

import ClipboardJS from 'clipboard';

import QRCode from 'qrcode';

@Component({
  selector: 'app-list-qr-code',
  templateUrl: './list-qr-code.page.html',
  styleUrls: ['./list-qr-code.page.scss'],
})
export class ListQrCodePage implements OnDestroy, OnInit {

  code: string;
  qrcode: string;

  clipboard: ClipboardJS;

  constructor(
  ) {}

  ngOnInit() {
    if (this.code) {
      const url = 'http://example.com/lists?qrcode=' + this.code;

      QRCode.toString(url, { margin: 0 })
        .then((svg: string) => this.qrcode = 'data:image/svg+xml;base64,' + btoa(svg))
        .catch((err) => console.error(err));

      this.clipboard = new ClipboardJS('.clipboard', {
        text: () => this.code,
      });
    }
  }

  ngOnDestroy() {
    this.clipboard.destroy();
  }

}
