import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookcollection',
  templateUrl: './bookcollection.component.html',
  styleUrls: ['./bookcollection.component.css']
})
export class BookcollectionComponent implements OnInit {

  constructor() { }
  @Input() title = "Collection of best"
  ngOnInit(): void {
  }

}
