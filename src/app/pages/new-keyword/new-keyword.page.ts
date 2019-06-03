import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-keyword',
  templateUrl: './new-keyword.page.html',
  styleUrls: ['./new-keyword.page.scss'],
})
export class NewKeywordPage implements OnInit {

  keywordForm = new FormGroup({
    text: new FormControl('', [
      Validators.maxLength(30),
      Validators.required,
    ]),
  });

  constructor(
  ) {}

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.keywordForm.invalid) {
      return;
    }

    console.log(this.keywordForm.value);
  }

}
