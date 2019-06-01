import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.page.html',
  styleUrls: ['./new-list.page.scss'],
})
export class NewListPage implements OnInit {

  isFirst: boolean;

  listForm = new FormGroup({
    name: new FormControl('', [
      Validators.maxLength(30),
      Validators.required,
    ]),
    image: new FormControl(),
  });

  constructor(
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    if (this.listForm.invalid) {
      return;
    }

    console.log(this.listForm.value);
  }

}
