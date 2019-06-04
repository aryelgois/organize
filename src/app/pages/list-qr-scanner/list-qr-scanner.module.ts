import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrScannerComponentModule } from '../../components/qr-scanner/qr-scanner.module';

import { ListQrScannerPage } from './list-qr-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrScannerComponentModule,
    RouterModule.forChild([{ path: '', component: ListQrScannerPage }]),
  ],
  declarations: [ListQrScannerPage],
})
export class ListQrScannerPageModule {}
