import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxStarRatingModule } from 'ngx-star-rating';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageBackgroundComponent } from './main-page-background/main-page-background.component';
import { RecentBooksComponent } from './recent-books/recent-books.component';
import { FeaturedBooksComponent } from './featured-books/featured-books.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HomePageComponent } from './home-page/home-page.component';



import { BookResultComponent } from './book-result/book-result.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';

import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    MainPageBackgroundComponent,
    RecentBooksComponent,
    FeaturedBooksComponent,
    StarRatingComponent,
    HomePageComponent,
    BookResultComponent,
    WishlistPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxStarRatingModule,
    MaterialModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
