import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxStarRatingModule } from 'ngx-star-rating';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageBackgroundComponent } from './main-page-background/main-page-background.component';
import { RecentBooksComponent } from './recent-books/recent-books.component';
import { FeaturedBooksComponent } from './featured-books/featured-books.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AuthComponent } from './auth/auth.component';

import { BookResultComponent } from './book-result/book-result.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { TestPageComponent } from './test-page/test-page.component';

import { MaterialModule } from './material/material.module';
import { HomeNavigationComponent } from './home-navigation/home-navigation.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookDetailsHomepageComponent } from './book-details-homepage/book-details-homepage.component';
import { SideBarSearchResultComponent } from './side-bar-search-result/side-bar-search-result.component';
import { FliterSearchResultComponent } from './fliter-search-result/fliter-search-result.component';
import { ArabicCollectionComponent } from './arabic-collection/arabic-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { loadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RequestBookComponent } from './request-book/request-book.component';

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
    HomeNavigationComponent,
    BookCollectionComponent,
    BookDetailsHomepageComponent,
    SideBarSearchResultComponent,
    FliterSearchResultComponent,
    ArabicCollectionComponent,

    AuthComponent,
    loadingSpinnerComponent,
    UserProfileComponent,
    RequestBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxStarRatingModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
