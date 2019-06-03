import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputMessageComponentModule } from '../../components/input-message/input-message.module';

import { NewKeywordPage } from './new-keyword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputMessageComponentModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: NewKeywordPage }]),
  ],
  declarations: [NewKeywordPage],
})
export class NewKeywordPageModule {}
