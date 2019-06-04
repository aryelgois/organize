import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  pages = [
    {
      title: 'Login',
      icon: 'log-in',
      url: '/login',
    },
    {
      title: 'Minhas listas',
      url: '/lists',
      icon: 'list-box',
    },
    {
      title: 'Sobre',
      icon: 'help-circle',
      url: '/about',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
