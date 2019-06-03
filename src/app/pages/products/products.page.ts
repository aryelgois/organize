import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

import { AbstractProduct } from '../../models/abstract-product';
import { List } from '../../models/list';
import { Product } from '../../models/product';
import { ProductSearchResult } from '../../models/product-search-result';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  list: List;

  search: string;
  exactMatch: boolean;

  private readonly content = new BehaviorSubject<ProductSearchResult[]>([]);
  content$: Observable<ProductSearchResult[]> = this.content.asObservable();

  get hasContent(): boolean {
    return this.content.getValue().some((group) => group.items.length > 0);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  onSearch(query: string): void {
    console.log('search:', query);
  }

  doRefresh(event): void {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  navigate(product: AbstractProduct|Product): void {
    const isProduct = product.hasOwnProperty('abstract');
    let url: string;
    let queryParams = {};

    if (this.list) {
      url = 'new';
      queryParams = {
        list: this.list.id,
        product: product.id,
        name: this.search,
      };
    } else if (isProduct) {
      url = product.id;
    } else {
      throw Error('Can not view AbstractProduct');
    }

    this.router.navigate([url], {
      queryParams,
      relativeTo: this.route,
    });
  }

}
