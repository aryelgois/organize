import { Component, OnInit } from '@angular/core';

import { List } from '../../models/list';
import { Product } from '../../models/product';

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

  countChecked(list: List): number {
    return list.products
      .filter((product: Product) => product.isChecked)
      .length;
  }

  doRefresh(event): void {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
