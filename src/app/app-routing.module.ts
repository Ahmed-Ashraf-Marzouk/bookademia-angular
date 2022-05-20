import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookResultComponent } from './book-result/book-result.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'prefix', redirectTo: 'home' },
    { path: 'home', component: HomePageComponent },
    { path: 'book-result', component: BookResultComponent },
    { path: 'wishlist', component: WishlistPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { enableTracing: true } // <-- debugging purposes only, comment out on publish
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
