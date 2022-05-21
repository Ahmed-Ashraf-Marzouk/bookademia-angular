import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent implements OnInit {

  constructor() { }
  @Input() title = "Collection of best"
  ngOnInit(): void {
  }

}
