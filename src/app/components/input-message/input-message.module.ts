import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputMessageComponent } from './input-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [InputMessageComponent],
  exports: [InputMessageComponent],
})
export class InputMessageComponentModule {}
