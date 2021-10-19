const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// Задание 1
/*let result = products.filter(function(product) {
    return product.photos; // я вот не понимаю как реализовать тут логику с проверкой на наполненность массива для id 5
})
console.log(result);*/

// Задание 2
products.sort(function (a, b) {
   return a.price - b.price;
});

console.log(products);




























