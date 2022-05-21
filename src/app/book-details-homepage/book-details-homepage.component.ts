import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-book-details-homepage',
  templateUrl: './book-details-homepage.component.html',
  styleUrls: ['./book-details-homepage.component.css']
})
export class BookDetailsHomepageComponent implements OnInit {
  name = "harry"
  price = "150.00"
  imgsrc = "assets/images/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg"
  constructor(private router: Router) { }

  goToBookResult() {

    this.router.navigate(['/book-result'])

  }


  ngOnInit(): void {
  }

}
