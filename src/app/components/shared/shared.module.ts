import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInputComponent } from './error-input/error-input.component';
import { AngularMaterialsModule } from 'src/app/angular-materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ErrorInputComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ErrorInputComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
