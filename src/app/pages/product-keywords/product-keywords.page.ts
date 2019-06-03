import { Component, OnInit } from '@angular/core';

import { Keyword } from '../../models/keyword';

@Component({
  selector: 'app-product-keywords',
  templateUrl: './product-keywords.page.html',
  styleUrls: ['./product-keywords.page.scss'],
})
export class ProductKeywordsPage implements OnInit {

  keywords: Keyword[];

  constructor(
  ) {}

  ngOnInit() {
  }

  voteDown(keyword: Keyword) {
    keyword.score -= 1;
  }

  voteUp(keyword: Keyword) {
    keyword.score += 1;
  }

}
