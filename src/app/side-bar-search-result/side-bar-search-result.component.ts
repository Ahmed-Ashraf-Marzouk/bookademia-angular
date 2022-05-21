import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-side-bar-search-result',
  templateUrl: './side-bar-search-result.component.html',
  styleUrls: ['./side-bar-search-result.component.css']
})
export class SideBarSearchResultComponent implements OnInit {

  publishDate: any;
  choices: string[] = ['All titles', 'Last 90 days', 'Last 180 days', 'Last 1 year'];
  book_types: FormGroup;

  constructor(fb: FormBuilder) {
    this.book_types = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });

  }

  ngOnInit(): void {
  }


}
