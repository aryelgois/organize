import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {

  @Input()
  user: User;

  constructor(
  ) {}

  ngOnInit() {
  }

}
