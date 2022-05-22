import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Book } from './book-template';


@Injectable({
  providedIn: 'root'
})
export class RemoteDatabaseServiceService {

  constructor(private client: HttpClient) { }


  postBook(book: Book) {
    // this.client.post('https://bookademia-b1d66-default-rtdb.firebaseio.com/book.json', book)
    this.client.post('https://collaborative-document-default-rtdb.firebaseio.com/book.json', book)
      .subscribe(responseData => {
        console.log(responseData);
      });

  }

  getBooks(): any {
    let books: Book[] = [];
    
    // this.client.get('https://bookademia-b1d66-default-rtdb.firebaseio.com/book.json')
    this.client.get('https://collaborative-document-default-rtdb.firebaseio.com/book.json')
      .pipe(map(responseData => {

        for (const [key, value] of Object.entries(responseData)) {
          books.push(new Book(key, value['name'], value['author'], value['publish'], value['rating'], value['img_url'], value['description'], value['category'], value['edition'], value['price'], value['inStock']));
        }
        return books;
      })).subscribe(responseData => { console.log(responseData) });

      return books
  }

  deleteBook(id: any) {

  }

  topBooks() {

  }

}
