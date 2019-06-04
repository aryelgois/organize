import { Component, HostBinding, OnInit } from '@angular/core';

/*
import { QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
*/

import { QrScan } from '../../models/qr-scan';

@Component({
  selector: 'app-list-qr-scanner',
  templateUrl: './list-qr-scanner.page.html',
  styleUrls: ['./list-qr-scanner.page.scss'],

})
export class ListQrScannerPage implements OnInit {

  @HostBinding('class.scanner-showing')
  scannerIsShowing: boolean;

  constructor(
  ) {}

  ngOnInit() {
  }

  onScan(scan: QrScan) {
    console.log('Scanned something:', scan);
  }

  onStatus(status) { // (status: QRScannerStatus)
    this.scannerIsShowing = status.showing;
  }

}
