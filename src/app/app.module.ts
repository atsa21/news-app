import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './angular-materials.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NewsPageComponent } from './components/main/news-page/news-page.component';
import { NewsCardComponent } from './components/main/news-card/news-card.component';
import { AddNewsDialogComponent } from './components/main/add-news-dialog/add-news-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewsPageComponent,
    NewsCardComponent,
    AddNewsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
