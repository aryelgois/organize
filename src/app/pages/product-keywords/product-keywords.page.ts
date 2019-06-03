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

  updateKeywords() {
    this.keywords.sort((a, b) => {
      const order = b.score - a.score;
      return (order === 0)
        ? ((a.text < b.text) ? -1 : ((a.text > b.text) ? 1 : 0))
        : order;
    });
  }

  voteDown(keyword: Keyword) {
    if (keyword.userVote !== -1) {
      keyword.score -= keyword.userVote + 1;
      keyword.userVote = -1;
    } else {
      keyword.score += 1;
      keyword.userVote = 0;
    }

    this.updateKeywords();
  }

  voteUp(keyword: Keyword) {
    if (keyword.userVote !== 1) {
      keyword.score += Math.abs(keyword.userVote) + 1;
      keyword.userVote = 1;
    } else {
      keyword.score -= 1;
      keyword.userVote = 0;
    }

    this.updateKeywords();
  }

}
