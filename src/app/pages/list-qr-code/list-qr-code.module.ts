import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptystateComponentModule } from '../../components/emptystate/emptystate.module';

import { ListQrCodePage } from './list-qr-code.page';

@NgModule({
  imports: [
    CommonModule,
    EmptystateComponentModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ListQrCodePage }]),
  ],
  declarations: [ListQrCodePage],
})
export class ListQrCodePageModule {}
