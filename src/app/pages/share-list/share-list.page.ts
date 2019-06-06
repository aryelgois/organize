import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-share-list',
  templateUrl: './share-list.page.html',
  styleUrls: ['./share-list.page.scss'],
})
export class ShareListPage implements OnInit {

  owner: User;
  users: User[] = [];
  anonymous = 0;

  items = [
    {
      title: 'Convidar',
      icon: 'person-add',
      url: 'invite',
    },
    {
      title: 'Código QR',
      icon: 'qr-code',
      url: 'qrcode',
    },
    {
      title: 'Enviar link',
      icon: 'link',
      handler: () => console.log('Enviar link'),
    },
  ];

  constructor(
  ) {}

  ngOnInit() {
  }

}
