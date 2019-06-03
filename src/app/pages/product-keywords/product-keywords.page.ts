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
    if (keyword.userVote !== -1) {
      keyword.score -= keyword.userVote + 1;
      keyword.userVote = -1;
    } else {
      keyword.score += 1;
      keyword.userVote = 0;
    }
  }

  voteUp(keyword: Keyword) {
    if (keyword.userVote !== 1) {
      keyword.score += Math.abs(keyword.userVote) + 1;
      keyword.userVote = 1;
    } else {
      keyword.score -= 1;
      keyword.userVote = 0;
    }
  }

}
