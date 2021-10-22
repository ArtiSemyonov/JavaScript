// es5


/*function Product(name, price) {
    this.name = name;
    this.price = price;
}



Product.prototype.say = function () {
    console.log(this.price);
}

function make25PercentDiscount() {
    console.log(this.price - (this.price * 0.25));
}

let product_1 = new Product('milk', 100);
let product_2 = new Product('meat', 200);
let product_3 = new Product('fish', 300);

// возник вопрос по блоку ниже. Может я туплю, но у меня не получилось реализовать в один make25PercentDiscount, вывод сразу трех
//элементов. Есть какой-то способ или для каждого вызова надо свой make25PercentDiscount, прописывать?
make25PercentDiscount.call(product_1);
make25PercentDiscount.call(product_2);
make25PercentDiscount.call(product_3);
*/
// es6

class Product {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        console.log(this.price - (this.price * 0.25));
    }
}

let product_1 = new Product('milk', 100);
let product_2 = new Product('meat', 200);
let product_3 = new Product('fish', 300);

// тут не понимаю почему не сработала логика, как в es5 и не вывело просто цену со скидкой, буду рад, если объясните.























