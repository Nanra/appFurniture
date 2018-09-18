import { HttpClientModule } from '@angular/common/http';
import { FurnitureService } from './shared/service/furniture.service';
import { CategoryService } from './shared/service/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ItemListComponent } from './collection/item-list/item-list.component';
import { ItemDetailComponent } from './collection/item-detail/item-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShortenPipe } from './shared/pipe/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CollectionComponent,
    ItemListComponent,
    ItemDetailComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [CategoryService, FurnitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
