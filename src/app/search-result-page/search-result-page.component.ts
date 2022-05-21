import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router"


@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {



  bookSpec: any[] = [
    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },

    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },


    {

      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },

    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },

    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },

    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },

    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },
    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },
    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },

    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },

    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },
    {
      rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
    },


  ];
  public form: FormGroup;
  rating3: number;

  constructor(private fb: FormBuilder, private router: Router) {
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


  goToBookResult(){

    this.router.navigate(['/book-result'])

  }

  ngOnInit(): void {
  }

}
