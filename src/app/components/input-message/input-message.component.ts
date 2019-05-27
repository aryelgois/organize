import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss'],
})
export class InputMessageComponent implements OnInit {

  @Input()
  field: FormControl;

  private errorMessages = {
    maxlength: 'Este valor é muito longo',
    required: 'Este campo é obrigatório',
  };

  get errorMessage(): string {
    if (!this.field) {
      return;
    }

    const errors = this.field.errors;
    if (errors) {
      const error = Object.keys(errors)[0];

      if (this.errorMessages.hasOwnProperty(error)) {
        return this.errorMessages[error];
      } else {
        throw new Error(`Missing form error message for '${error}'`);
      }
    }
  }

  constructor(
  ) {}

  ngOnInit() {
  }

  isInvalid(): boolean {
    return this.field && this.field.invalid && (this.field.dirty || this.field.touched);
  }

}
