import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';

import { ImageViewerComponent } from '../../components/image-viewer/image-viewer.component';
import { Keyword } from '../../models/keyword';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  @ViewChild('fileInput')
  fileInput: ElementRef;

  product: Product;

  keywords: Keyword[] = [];

  amountPattern = '\\d{1,4}([.,]\\d+|)';
  pricePattern = '\\d{1,6}([.,]\\d+|)';

  productForm = new FormGroup({
    name: new FormControl('', [
      Validators.maxLength(30),
      Validators.required,
    ]),
    image: new FormControl(),
    hint: new FormControl('', [
      Validators.maxLength(30),
    ]),
    store: new FormControl('', [
      Validators.maxLength(30),
    ]),
    amount: new FormControl('', [
      Validators.min(1),
      Validators.max(9999),
      Validators.pattern(this.amountPattern),
    ]),
    unit: new FormControl('', [
      Validators.maxLength(10),
    ]),
    price: new FormControl('', [
      Validators.min(0.01),
      Validators.max(999999),
      Validators.pattern(this.pricePattern),
    ]),
    isUnitPrice: new FormControl(false),
    currency: new FormControl('BRL', [
      Validators.required,
    ]),
  });

  constructor(
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    console.log(this.productForm.value);
  }

  changeImage(event): void {
    console.log(event);
  }

  selectImage(): void {
    this.fileInput.nativeElement.click();
  }

  async presentImageModal() {
    const modal = await this.modalCtrl.create({
      component: ImageViewerComponent,
      componentProps: {
        title: this.productForm.get('name').value || 'Imagem do produto',
        source: this.productForm.get('image').value,
        options: [
          {
            icon: 'create',
            handler: () => this.selectImage(),
          },
        ],
      },
      cssClass: 'modal-fullscreen',
    });

    return await modal.present();
  }

}
