import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptystateComponentModule } from '../../components/emptystate/emptystate.module';

import { NotFoundPage } from './not-found.page';

@NgModule({
  imports: [
    CommonModule,
    EmptystateComponentModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: NotFoundPage }]),
  ],
  declarations: [NotFoundPage],
})
export class NotFoundPageModule {}
