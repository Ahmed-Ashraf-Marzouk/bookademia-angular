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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageBackgroundComponent } from './main-page-background/main-page-background.component';
import { FeaterdBooksComponent } from './featerd-books/featerd-books.component';
import { RecentBooksComponent } from './recent-books/recent-books.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    MainPageBackgroundComponent,
    FeaterdBooksComponent,
    RecentBooksComponent,

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
