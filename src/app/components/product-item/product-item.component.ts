import { Component, Input, OnInit } from '@angular/core';

import { AbstractProduct } from '../../models/abstract-product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input()
  button: boolean;

  @Input()
  product: AbstractProduct|Product;

  @Input()
  showChecked: boolean;

  @Input()
  showDetails: boolean;

  constructor(
  ) {}

  ngOnInit() {
  }

}
