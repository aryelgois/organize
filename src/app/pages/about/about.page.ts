import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

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
