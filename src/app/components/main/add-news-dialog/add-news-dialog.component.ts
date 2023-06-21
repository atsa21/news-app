import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-news-dialog',
  templateUrl: './add-news-dialog.component.html',
  styleUrls: ['./add-news-dialog.component.scss']
})
export class AddNewsDialogComponent implements OnInit {

  newsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddNewsDialogComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.newsForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(256)]),
    });
  }

  getControl(controlName: string): AbstractControl {
    const formControl = this.newsForm.get(controlName);
    return formControl!;
  }

  getIsControlInvalid(controlName: string): boolean {
    return this.getControl(controlName).touched && this.getControl(controlName).invalid;
  }

  addNews(): void {
    if(this.newsForm.valid) {
      this.dialogRef.close(this.newsForm.value);
    }
  }
}
