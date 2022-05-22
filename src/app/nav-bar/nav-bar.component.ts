import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book-template';
import { RemoteDatabaseServiceService } from '../remote-database-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, private service: RemoteDatabaseServiceService) { }

  book_specs: Book[] = [];
  ngOnInit(): void { }

  goToWishlist(): void {
    this.router.navigate(['wishlist']);
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  goSearchResult() {
    this.router.navigate(['search-result']);
  }

  goUserProfile() {
    this.router.navigate(['user-profile']);
  }
}
