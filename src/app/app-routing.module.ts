import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookResultComponent } from './book-result/book-result.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'search-result', component: SearchResultPageComponent },
  { path: 'book-result', component: BookResultComponent },
  { path: 'wishlist', component: WishlistPageComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only, comment out on publish
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
