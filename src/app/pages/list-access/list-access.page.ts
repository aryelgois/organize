import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

import { isSameUser, User } from '../../models/user';

@Component({
  selector: 'app-list-access',
  templateUrl: './list-access.page.html',
  styleUrls: ['./list-access.page.scss'],
})
export class ListAccessPage implements OnInit {

  user: User;
  userIsOwner: boolean;

  owner: User;
  users: User[] = [];
  anonymous = 0;

  isAnonymousAllowed: boolean;
  isLinkEnabled: boolean;

  constructor(
    private actionSheetCtrl: ActionSheetController,
  ) {}

  ngOnInit() {
    // this.userIsOwner = isSameUser(this.user, this.owner);
  }

  async presentAccessOptions() {
    const buttons = [
      {
        text: 'Alterar dono',
        icon: 'share-alt',
        role: 'destructive',
        handler: () => console.log('Alterar dono'),
      },
      this.isAnonymousAllowed
        ? {
            text: 'Bloquear anônimos',
            icon: 'anonymous-off',
            handler: () => console.log('Bloquear anônimos'),
          }
        : {
            text: 'Permitir anônimos',
            icon: 'anonymous',
            handler: () => console.log('Permitir anônimos'),
          },
      this.isLinkEnabled
        ? {
            text: 'Desativar compartilhamento por link',
            icon: 'link-off',
            handler: () => console.log('Desativar compartilhamento por link'),
          }
        : {
            text: 'Ativar compartilhamento por link',
            icon: 'link',
            handler: () => console.log('Ativar compartilhamento por link'),
          },
    ];

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opções de compartilhamento',
      buttons,
    });

    return await actionSheet.present();
  }

}
