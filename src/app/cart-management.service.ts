import { Injectable } from '@angular/core';
import { Book } from './book-template';

@Injectable({
    providedIn: 'root'
})
export class CartManagementService {

    constructor() { }
    addToCart(book: Book) {
        console.log(book)
    }
}
