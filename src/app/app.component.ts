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
      url: '/login',
      icon: 'log-in',
    },
    {
      title: 'Minhas listas',
      url: '/lists',
      icon: 'list-box',
    },
    {
      title: 'Sobre',
      url: '/about',
      icon: 'help-circle',
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
