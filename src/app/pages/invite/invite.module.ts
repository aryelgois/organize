import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputMessageComponentModule } from '../../components/input-message/input-message.module';

import { InvitePage } from './invite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputMessageComponentModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: InvitePage }]),
  ],
  declarations: [InvitePage],
})
export class InvitePageModule {}
