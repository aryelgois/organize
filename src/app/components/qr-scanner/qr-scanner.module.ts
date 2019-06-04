import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptystateComponentModule } from '../emptystate/emptystate.module';

import { QrScannerComponent } from './qr-scanner.component';

@NgModule({
  imports: [
    CommonModule,
    EmptystateComponentModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [QrScannerComponent],
  exports: [QrScannerComponent],
})
export class QrScannerComponentModule {}
