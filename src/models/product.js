export class Product {
    id = '';
    title = '';
    description = '';
    price = 0;
    count = 0;
    hasDisscount = false;
    disscount = '';
    images = [];

    constructor(id, title, description, price, count, hasDisscount, disscount, images){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.count = count;
        this.hasDisscount = hasDisscount;
        this.disscount = disscount;
        this.images = images;
    }
}