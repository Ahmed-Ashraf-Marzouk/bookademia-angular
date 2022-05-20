import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { TestPageComponent } from './test-page/test-page.component';


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
    SearchResultPageComponent,
    TestPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    NgxStarRatingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
