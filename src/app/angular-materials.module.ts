import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AngularMaterialsModule { }
