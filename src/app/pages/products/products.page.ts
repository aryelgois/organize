import { Component, OnInit } from '@angular/core';

import { List } from '../../models/list';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  list: List;

  search: string;

  results: Product[];

  constructor(
  ) {}

  ngOnInit() {
  }

  onSearch(query: string): void {
    console.log('search:', query);
  }

}
