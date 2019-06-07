import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ActionSheetController } from '@ionic/angular';

import { List } from '../../models/list';
import { Product } from '../../models/product';
import { isSameUser, User } from '../../models/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: List;

  user: User;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private route: ActivatedRoute,
    private router: Router,
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
        handler: () => this.navigate(['edit']),
      },
      {
        text: 'Compartilhar',
        icon: 'share',
        handler: () => this.navigate(['share']),
      },
      {
        text: 'Fazer uma cópia',
        icon: 'copy',
        handler: () => this.router.navigate(['/lists/new'], {
          queryParams: { list: this.list.id },
        }),
      },
      isSameUser(this.user, this.list.owner)
        ? {
            text: 'Apagar',
            role: 'destructive',
            icon: 'trash',
            handler: () => this.deleteList(),
          }
        : {
            text: 'Remover lista compartilhada',
            role: 'destructive',
            icon: 'trash',
            handler: () => this.unlinkList(),
          },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
      },
    ];

    const actionSheet = await this.actionSheetCtrl.create({
      header: this.list.name,
      buttons,
    });

    return await actionSheet.present();
  }

  private navigate(url: any[]) {
    return this.router.navigate(url, { relativeTo: this.route });
  }

  private deleteList() {
  }

  private unlinkList() {
  }

}
