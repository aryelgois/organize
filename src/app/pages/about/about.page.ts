import { Component, OnInit } from '@angular/core';

import { VERSION } from '../../../environments/version';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  appVersion = VERSION;

  pages = [
    {
      title: 'Sobre o app',
      icon: 'information-circle-outline',
      url: '/welcome',
    },
    {
      title: 'Termos de serviço',
      icon: 'paper',
      url: 'terms',
    },
    {
      title: 'Política de privacidade',
      icon: 'lock',
      url: 'privacy',
    },
  ];

  constructor(
  ) {}

  ngOnInit() {
  }

}
