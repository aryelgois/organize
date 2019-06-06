import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-list-access',
  templateUrl: './list-access.page.html',
  styleUrls: ['./list-access.page.scss'],
})
export class ListAccessPage implements OnInit {

  owner: User;
  users: User[];
  anonymous: number;

  constructor(
  ) {}

  ngOnInit() {
  }

}
