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
      title: 'Termos de serviço',
      url: 'terms',
      icon: 'paper',
    },
    {
      title: 'Política de privacidade',
      url: 'privacy',
      icon: 'lock',
    },
  ];

  constructor(
  ) {}

  ngOnInit() {
  }

}
