import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';

import { ImageViewerComponent } from '../../components/image-viewer/image-viewer.component';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.page.html',
  styleUrls: ['./new-list.page.scss'],
})
export class NewListPage implements OnInit {

  @ViewChild('fileInput')
  fileInput: ElementRef;

  isFirst: boolean;

  listForm = new FormGroup({
    name: new FormControl('', [
      Validators.maxLength(30),
      Validators.required,
    ]),
    image: new FormControl(),
  });

  constructor(
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    if (this.listForm.invalid) {
      return;
    }

    console.log(this.listForm.value);
  }

  changeImage(event) {
    console.log(event);
  }

  selectImage() {
    this.fileInput.nativeElement.click();
  }

  async presentImageModal() {
    const modal = await this.modalCtrl.create({
      component: ImageViewerComponent,
      componentProps: {
        title: this.listForm.get('name').value || 'Imagem da lista',
        source: this.listForm.get('image').value,
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
