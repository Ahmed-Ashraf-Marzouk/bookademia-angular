
export class Book {

    constructor(id: any, name: any, author: any, publish: any, rating: any, img_url: any, description: any, category: any, edition: any, price: any, inStock: any) {
        this.name = name;
        this.id = id;
        this.author = author;
        this.publish = publish;
        this.rating = rating;
        this.img_url = img_url;
        this.description = description;
        this.category = category;
        this.edition = edition;
        this.inStock = inStock;
        this.price = price;

    }
    // constructor(id: any, name: any, author: any, publish: any, rating: any, img_url: any, description: any, category: any, edition: any, price: any, inStock: any) {
    //     this.name = name;
    //     // this.id = id;
    //     // this.author = author;
    //     // this.publish = publish;
    //     // this.rating = rating;
    //     // this.img_url = img_url;
    //     // this.description = description;
    //     // this.category = category;
    //     // this.edition = edition;
    //     // this.inStock = inStock;
    //     // this.price = price;

    // }


    name: string = '';
    id: string = '';
    author: string = '';
    publish: string = '';
    rating: number = 0;
    img_url: string = '';
    description: string = '';
    category: string = '';
    edition: string = '';
    inStock: boolean = false;
    price: number = 0;
}


// , publishn: any, ratingn: any, img_urln: any, description: any, categoryn: any, editionn: any, inStockn: any, pricen: any) {

