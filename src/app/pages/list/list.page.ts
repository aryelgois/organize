import { Component, OnInit } from '@angular/core';

import { List } from '../../models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: List;

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
