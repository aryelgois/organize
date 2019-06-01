import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {

  @Input()
  color = 'dark';

  @Input()
  source: string;

  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  options: { icon: string; handler: () => void; }[] = [];

  slideOpts = {
    centeredSlides: 'true',
  };

  constructor(
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
