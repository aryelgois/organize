import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserAvatarComponentModule } from '../../components/user-avatar/user-avatar.module';

import { ListAccessPage } from './list-access.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ListAccessPage }]),
    UserAvatarComponentModule,
  ],
  declarations: [ListAccessPage],
})
export class ListAccessPageModule {}
