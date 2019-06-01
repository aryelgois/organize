import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  results: Product[];

  constructor(
  ) {}

  ngOnInit() {
  }

}
