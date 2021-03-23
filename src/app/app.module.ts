import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { DetailsNewsComponent } from './components/details-news/details-news.component';
import { ListNewsComponent } from './components/list-news/list-news.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewsComponent,
    DetailsNewsComponent,
    ListNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
