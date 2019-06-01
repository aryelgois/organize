import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputMessageComponentModule } from '../../components/input-message/input-message.module';

import { NewListPage } from './new-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputMessageComponentModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: NewListPage }]),
  ],
  declarations: [NewListPage],
})
export class NewListPageModule {}
