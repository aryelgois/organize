import { Component, Input, OnInit } from '@angular/core';

import { AnyProduct, isProduct } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input()
  button: boolean;

  @Input()
  product: AnyProduct;

  @Input()
  showChecked: boolean;

  @Input()
  showDetails: boolean;

  get keywords() {
    const items = isProduct(this.product)
      ? this.product.abstract.keywords
      : this.product.keywords;

    return items.map((keyword) => keyword.text).join(', ');
  }

  constructor(
  ) {}

  ngOnInit() {
  }

}
