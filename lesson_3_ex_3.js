const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// пробовал тут через forEach, но не очень вышло, буду рад, если Вы напишите через него и я посмотрю логику
//products.forEach(function (item, i, products) {
//    console.log((` ${i} : ${products[i]} (массив: ${products} `));
//});

for(let i = 0; i < products.length; i++){
    console.log('Цена со скидкой в 15% будет равна: ' + (products[i].price - (products[i].price * 0.15)));
}

















