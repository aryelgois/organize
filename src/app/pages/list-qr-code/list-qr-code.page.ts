import { Component, OnInit } from '@angular/core';

import QRCode from 'qrcode';

@Component({
  selector: 'app-list-qr-code',
  templateUrl: './list-qr-code.page.html',
  styleUrls: ['./list-qr-code.page.scss'],
})
export class ListQrCodePage implements OnInit {

  code: string;
  qrcode: string;

  constructor(
  ) {}

  ngOnInit() {
    if (this.code) {
      const url = 'http://example.com/lists?qrcode=' + this.code;

      QRCode.toString(url, { margin: 0 })
        .then((svg: string) => this.qrcode = 'data:image/svg+xml;base64,' + btoa(svg))
        .catch((err) => console.error(err));
    }
  }

}
