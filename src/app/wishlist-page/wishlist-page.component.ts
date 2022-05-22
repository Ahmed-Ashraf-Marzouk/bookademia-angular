import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange, ScreenTypes } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartManagementService } from '../cart-management.service';
import { Book } from '../book-template';
import { RemoteDatabaseServiceService } from '../remote-database-service.service';

@Component({
    selector: 'app-wishlist-page',
    templateUrl: './wishlist-page.component.html',
    styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {

    constructor(public mediaObserver: MediaObserver,
        public rdsService: RemoteDatabaseServiceService,
        public myCart: CartManagementService) { }

    public booksInWishlist: Book[] = []

    public isHandset$!: Observable<boolean>;
    public isWeb$!: Observable<boolean>;

    // Since the table optimizes for performance, it will not automatically check for changes to the data array.
    // Instead, when objects are added, removed, or moved on the data array, you can trigger an update to the table's
    // rendered rows by calling its renderRows() method.

    ngOnInit(): void {

        // this.isHandset$ = this.assign_screentype(ScreenTypes.HANDSET);
        this.isHandset$ = this.mediaObserver
            .asObservable()
            .pipe(
                map((changes: MediaChange[]) =>
                    changes.some(
                        (change: MediaChange) => change.mediaQuery === ScreenTypes.HANDSET
                    )
                )
            );

        this.booksInWishlist = this.rdsService.getBooks()
        if (this.booksInWishlist.length < 2) {
            this.booksInWishlist.push(new Book(

                '0471488852',
                'Advanced Engineering Mathematics',
                'Erwin Kreyszig',
                'Wiley',
                4.5,
                'https://pictures.abebooks.com/isbn/9780471488859-us-300.jpg',
                'In today’s world of increasingly complex engineering problems, powerful new mathematical and computational methods, and enormous computer capacities, you can get overwhelmed by little things you will only occasionally use. Instead, you need to learn how to think mathematically and gain a firm grasp of the interrelationship among theory, computing, and experiment. That’s why Kreyszig’s text helps you develop a solid understanding of the basic principles and methods of advanced engineering mathematics in all three phases of problem solving: Modeling, Solving, and Interpreting. This best-selling text is known for its comprehensive coverage, careful and correct mathematics, outstanding exercises, and self-contained chapters.',
                'Mathematics',
                '9th',
                '207.22$',
                false,

            ))

            this.booksInWishlist.push(new Book(

                '0465050654',
                'The Design of Everyday Things: Revised and Expanded Edition',
                'Don Norman',
                'Basic Books',
                5,
                'https://pictures.abebooks.com/isbn/9780465050659-us-300.jpg',
                'Even the smartest among us can feel inept as we fail to figure out which light switch or oven burner to turn on, or whether to push, pull, or slide a door. The fault, argues this ingenious -- even liberating -- book, lies not in ourselves, but in product design that ignores the needs of users and the principles of cognitive psychology. The problems range from ambiguous and hidden controls to arbitrary relationships between controls and functions, coupled with a lack of feedback or other assistance and unreasonable demands on memorization. The Design of Everyday Things shows that good, usable design is possible. The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints. The goal: guide the user effortlessly to the right action on the right control at the right time.',
                'UX',
                '5th',
                '8.99$',
                true,

            ))
            console.log(this.booksInWishlist)

        }

    }

}
