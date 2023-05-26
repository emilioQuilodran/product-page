export class Product {
    title = '';
    description = '';
    price = '';
    count = 0;
    hasDisscount = false;
    disscount = '';
    images = [];

    constructor(title, description, price, count, hasDisscount, disscount, images){
        this.title = title;
        this.description = description;
        this.price = price;
        this.count = count;
        this.hasDisscount = hasDisscount;
        this.disscount = disscount;
        this.images = images;
    }
}