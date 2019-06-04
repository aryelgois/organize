import { Component, EventEmitter, NgZone, OnDestroy, OnInit, Output } from '@angular/core';

/*
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
*/

import { from, Subscription } from 'rxjs';

import { QrScan } from '../../models/qr-scan';

const QRSCANNER_ERRORS = [
  {
    name: 'UNEXPECTED_ERROR',
    title: 'Algo deu errado',
    description: 'A função de ler código QR está indisponível.',
  },
  {
    name: 'CAMERA_ACCESS_DENIED',
    title: 'Precisamos acessar sua câmera',
    description: 'Abra as configurações do aplicativo para permitir o acesso à câmera.',
  },
  {
    name: 'CAMERA_ACCESS_RESTRICTED',
    title: 'Precisamos acessar sua câmera',
    description: 'O acesso à câmera é restrito.',
  },
  {
    name: 'CAMERA_UNAVAILABLE',
    title: 'A câmera não está disponível',
    description: 'Não foi possível acessar a câmera.',
  },
];

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent implements OnDestroy, OnInit {

  @Output('scan')
  scanEvent = new EventEmitter<QrScan>();

  @Output('status')
  statusEvent = new EventEmitter<any>(); // <QRScannerStatus>

  isInvalid: boolean;
  scannerError: string;
  status: any; // QRScannerStatus

  private scannerSubscription: Subscription;

  constructor(
    /*
    private qrScanner: QRScanner,
    */
    private zone: NgZone,
  ) {}

  ngOnInit() {
    this.doScan();
  }

  ngOnDestroy() {
    this.scannerSubscription.unsubscribe();
  }

  doScan(): void {
    if (this.scannerSubscription) {
      this.scannerSubscription.unsubscribe();
    }

    this.scannerSubscription = from(['scan']).subscribe();
  }

  invalid(): void {
    this.zone.run(() => {
      this.isInvalid = true;
    });
  }

  openSettings(): void {
    /*
    this.qrScanner.openSettings();
    */
  }

  private emitScan(text: string): void {
    const scan: QrScan = {
      text,
      invalid: () => this.invalid(),
    };
    this.scanEvent.emit(scan);
  }

  private emitStatus(status: any): void { // (status: QRScannerStatus)
    this.statusEvent.emit(status);
    this.status = status;
  }

}
