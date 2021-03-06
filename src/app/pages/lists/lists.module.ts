import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptystateComponentModule } from '../../components/emptystate/emptystate.module';

import { ListsPage } from './lists.page';

@NgModule({
  imports: [
    CommonModule,
    EmptystateComponentModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ListsPage }]),
  ],
  declarations: [ListsPage],
})
export class ListsPageModule {}
