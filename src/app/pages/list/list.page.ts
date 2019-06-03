import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

import { List } from '../../models/list';
import { Product } from '../../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: List;

  constructor(
    private actionSheetCtrl: ActionSheetController,
  ) {}

  ngOnInit() {
  }

  swipeProduct(product: Product): void {
    product.isChecked = !product.isChecked;
  }

  countChecked(list: List): number {
    return list.products
      .filter((product: Product) => product.isChecked)
      .length;
  }

  doRefresh(event): void {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async presentListOptions() {
    const buttons = [
      {
        text: 'Editar',
        icon: 'create',
        handler: () => console.log('Editar'),
      },
      {
        text: 'Compartilhar',
        icon: 'share',
        handler: () => console.log('Compartilhar'),
      },
      {
        text: 'Duplicar',
        icon: 'copy',
        handler: () => console.log('Duplicar'),
      },
      {
        text: 'Apagar',
        role: 'destructive',
        icon: 'trash',
        handler: () => console.log('Apagar'),
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => console.log('Cancelar'),
      },
    ];

    const actionSheet = await this.actionSheetCtrl.create({
      header: this.list.name,
      buttons,
    });

    return await actionSheet.present();
  }

}
