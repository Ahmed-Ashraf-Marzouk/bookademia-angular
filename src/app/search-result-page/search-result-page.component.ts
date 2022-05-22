import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { Book } from '../book-template';
import { RemoteDatabaseServiceService } from '../remote-database-service.service';



@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {


  public form: FormGroup;
  book_specs: any;
  books: Book[] = [];

  constructor(private fb: FormBuilder, private router: Router, private service: RemoteDatabaseServiceService) {
    this.form = this.fb.group({
      rating: ['', Validators.required],
      rating0: [0],
      rating1: [1],
      rating2: [2],
      rating3: [3],
      rating4: [4],
      rating5: [5],

    });
  }


  ngOnInit(): void {
    this.book_specs = [];
    this.book_specs = this.service.getBooks();
  }

  goToBookResult() {

    this.router.navigate(['/book-result']);


    // .subscribe(responseData => {
    //   console.log(responseData);
    //   this.books.push(responseData);
    // });

  }

  search() {
  }


}


  // // database

  // bookSpec: any[] = [
  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },

  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },


  //   {

  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },

  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },

  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },

  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },

  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },
  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },
  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },

  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },

  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },
  //   {
  //     rating: 1, name: 'Computer Networks 3rd edition', id: "'rating1'", disabled: false, author: 'Ashraf'
  //   },
