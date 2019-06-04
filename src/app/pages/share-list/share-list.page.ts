import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-list',
  templateUrl: './share-list.page.html',
  styleUrls: ['./share-list.page.scss'],
})
export class ShareListPage implements OnInit {

  items = [
    {
      title: 'Convidar',
      icon: 'person-add',
      url: 'invite',
    },
    {
      title: 'Código QR',
      icon: 'barcode',
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
