import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptystateComponentModule } from '../../components/emptystate/emptystate.module';
import { ProductItemComponentModule } from '../../components/product-item/product-item.module';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    EmptystateComponentModule,
    FormsModule,
    IonicModule,
    ProductItemComponentModule,
    RouterModule.forChild([{ path: '', component: ListPage }]),
  ],
  declarations: [ListPage],
})
export class ListPageModule {}
