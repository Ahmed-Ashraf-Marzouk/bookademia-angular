import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {



  bookSpec: any[] = [
    {
      rating: 1, id: "'rating1'", disabled: false
    },

    {
      rating: 2, id: "'rating2'", disabled: false
    },


    {
      rating: 3, id: "'rating3'", disabled: false
    },


    {
      rating: 4, id: "'rating4'", disabled: false
    },

    {
      rating: 4, id: "'rating4'", disabled: false
    },

    {
      rating: 4, id: "'rating4'", disabled: false
    },

    {
      rating: 4, id: "'rating4'", disabled: false
    },


  ];
  public form: FormGroup;
  rating3: number;

  constructor(private fb: FormBuilder) {
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
      rating1: [1],
      rating2: [2],
      rating3: [3],
      rating4: [4],
      rating5: [5]

    })
  }

  ngOnInit(): void {
  }

}
