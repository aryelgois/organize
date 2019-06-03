import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

import { Keyword } from '../../models/keyword';

@Component({
  selector: 'app-product-keywords',
  templateUrl: './product-keywords.page.html',
  styleUrls: ['./product-keywords.page.scss'],
})
export class ProductKeywordsPage implements OnInit {

  keywords: Keyword[];

  constructor(
    private actionSheetCtrl: ActionSheetController,
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

  async presentKeywordOptions(keyword) {
    const buttons = [
      keyword.userIsAuthor
        ? {
            text: 'Apagar',
            role: 'destructive',
            icon: 'trash',
            handler: () => console.log('Apagar'),
          }
        : {
            text: 'Denunciar',
            icon: 'alert',
            handler: () => console.log('Denunciar'),
          },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
      },
    ];

    const actionSheet = await this.actionSheetCtrl.create({
      header: keyword.text,
      buttons,
    });

    return await actionSheet.present();
  }

}
