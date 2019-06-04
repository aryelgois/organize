import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-share-list',
  templateUrl: './share-list.page.html',
  styleUrls: ['./share-list.page.scss'],
})
export class ShareListPage implements OnInit {

  owner: User;
  users: User[];
  anonymous: number;

  items = [
    {
      title: 'Convidar',
      icon: 'person-add',
      url: 'invite',
    },
    {
      title: 'Código QR',
      iconSrc: '/assets/icons/qr-code.svg',
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
