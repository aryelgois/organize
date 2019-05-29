import { Component, OnInit } from '@angular/core';

import { List } from '../../models/list';
import { Product } from '../../models/product';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  isLogged: boolean;

  lists: List[];

  constructor(
  ) {}

  ngOnInit() {
  }

  countChecked(list: List): number {
    return list.products
      .filter((product: Product) => product.isChecked)
      .length;
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
