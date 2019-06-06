import { Component, OnInit } from '@angular/core';

import { ActionSheetController, NavController, ToastController } from '@ionic/angular';

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
    private navCtrl: NavController,
    private toastCtrl: ToastController,
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
            handler: () => this.deleteKeyword(keyword),
          }
        : {
            text: 'Denunciar',
            icon: 'alert',
            handler: () => this.reportKeyword(keyword),
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

  private deleteKeyword(keyword: Keyword): void {
    this.presentToast({
      message: 'Palavra-chave apagada',
      buttons: [
        {
          text: 'Desfazer',
          handler: () => this.undoDeleteKeyword(keyword),
        },
      ],
    });

    if (this.keywords.length === 0) {
      this.navCtrl.back();
    }
  }

  private undoDeleteKeyword(keyword: Keyword): void {
  }

  private reportKeyword(keyword: Keyword): void {
    this.presentToast({ message: 'Não se preocupe, iremos verificar essa palavra'});
  }

  private async presentToast(options: any) {
    const toast = await this.toastCtrl.create({
      duration: 10000,
      ...options,
    });

    return toast.present();
  }

}
