import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserAvatarComponentModule } from '../../components/user-avatar/user-avatar.module';

import { ShareListPage } from './share-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ShareListPage }]),
    UserAvatarComponentModule,
  ],
  declarations: [ShareListPage],
})
export class ShareListPageModule {}
