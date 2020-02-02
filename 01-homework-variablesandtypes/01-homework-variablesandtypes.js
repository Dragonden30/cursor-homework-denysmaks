let priceLow = 15.678;

let priceHigh = 123.965;

let priceMid = 90.2345;

let priceMax = Math.max(priceLow,priceHigh,priceMid);

console.log("Maximum number: "+ priceMax);

let priceMin = Math.min(priceLow,priceHigh,priceMid);

console.log("Minimum number: "+ priceMin);

let sumOfPrices = priceLow + priceMid + priceHigh;

console.log("Sum of products:  "+ sumOfPrices);

let priceLowFloored = Math.floor(priceLow);

let priceHighFloored = Math.floor(priceHigh);

let priceMidFloored = Math.floor(priceMid);

let sumOfFlooredPrices = priceLowFloored + priceHighFloored + priceMidFloored;

console.log("Sum of products 'floored':  "+ sumOfFlooredPrices);

let priceCeil = Math.ceil((priceLow + priceHigh + priceMid)/100)*100;

console.log("Sum of products 'ceiled to 100':  "+ priceCeil);

let sumOfPricesFlooded = Math.floor(sumOfPrices) 

const sumEvenOrNot = sumOfPricesFlooded % 2 > 0 ? "Even" : "Odd";

console.log("Flooded sum of products is "+ sumEvenOrNot);

const customerMoney = 500;

let chargeFromSum = customerMoney - sumOfPrices;

console.log("Charge from " + customerMoney + "will be "+ shargeFromSum);

let midPrice = sumOfPrices/3;

console.log("Midle price of " + midPrice + " with round to 2 number after dot will be "+ midPrice.toFixed(2));

let randSaleNum = (Math.random(100)).toFixed(2);

console.log("The sale: " + randSaleNum*100 +"%");

let anotherSumOfPrices = (priceHigh + priceLow).toFixed(2);

let salePrice = (anotherSumOfPrices * randSaleNum).toFixed(2);

let lostOfPrice = anotherSumOfPrices/2 - salePrice;

console.log("The lost of price will be: " + anotherSumOfPrices/2 + " - " + salePrice + " -> " + lostOfPrice.toFixed(2));

document.writeln(`Шаблонная строка:
Максимальное число: ${priceMax};
Минимальное число: ${priceMin};
Сума цены продуктов: ${sumOfPrices};
Сума цены продуктов 'floored': ${sumOfFlooredPrices};
Сума цены продуктов 'ceiled to 100':   ${priceCeil};
Округленное меньшую сторону cума цены продуктов:  ${sumEvenOrNot};
Сдача из 500: ${chargeFromSum};
Средняя цена: ${midPrice.toFixed(2)};
Скидка: ${randSaleNum*100}%;
Потеря прибыли будет: ${anotherSumOfPrices/2} - ${salePrice} -> ${lostOfPrice.toFixed(2)};
`);
