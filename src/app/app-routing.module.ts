import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookResultComponent } from './book-result/book-result.component';

const routes: Routes = [
  {path: 'book-result' , component: BookResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
