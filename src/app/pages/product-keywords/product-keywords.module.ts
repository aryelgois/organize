import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductKeywordsPage } from './product-keywords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ProductKeywordsPage }]),
  ],
  declarations: [ProductKeywordsPage],
})
export class ProductKeywordsPageModule {}
