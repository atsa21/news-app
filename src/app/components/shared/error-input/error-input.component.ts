import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { validatorErrors } from 'src/app/models/error-type.enum';
import { errorType } from 'src/app/models/type-error.enum';

@Component({
  selector: 'app-error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss']
})
export class ErrorInputComponent implements OnInit {

  @Input() validator!: AbstractControl;
  errorMessage!: string;

  ngOnInit(): void {
    if(this.validator) {
      this.getType();
      this.validator.valueChanges.pipe().subscribe(() => {
        this.getType();
      });
    }
  }

  getType(): void {
    Object.values(errorType).forEach((err) => {
      if (this.validator?.errors?.[err]) {
        switch (err) {
          case errorType.minlength:
            this.errorMessage = this.getMinlength(this.validator.errors?.['minlength'].requiredLength);
            break;
          case errorType.maxlength:
            this.errorMessage = this.getMaxlength(this.validator.errors?.['maxlength'].requiredLength);
            break;
          default:
            this.errorMessage = validatorErrors.required;
        }
      }
    });
  }

  getMinlength(minlength: number): string {
    switch (minlength) {
      case 2 :
        return validatorErrors.minlengthTitle
      case 10 :
        return validatorErrors.minlengthDescription
      default:
        return validatorErrors.minlength
    }
  }

  getMaxlength(maxlength: number): string {
    switch (maxlength) {
      case 70 :
        return validatorErrors.maxlengthTitle
      case 256 :
        return validatorErrors.maxlengthDescription
      default:
        return validatorErrors.maxlength
    }
  }

}
