import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WelcomeGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {}

  canActivate() {
    const sawWelcome = localStorage.getItem('sawWelcome');

    if (sawWelcome === 'true') {
      return this.router.parseUrl('/lists');
    }

    localStorage.setItem('sawWelcome', 'true');

    return this.router.parseUrl('/welcome');
  }

}
