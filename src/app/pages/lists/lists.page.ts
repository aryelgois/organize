import { Component, OnInit } from '@angular/core';

import { List } from '../../models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  lists: List[] = [];

  constructor(
  ) {}

  ngOnInit() {
  }

}
