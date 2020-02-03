const priceLow = 15.678;

const priceHigh = 123.965;

const priceMid = 90.2345;

const priceMax = Math.max(priceLow,priceHigh,priceMid);

console.log("Maximum number: "+ priceMax);

const priceMin = Math.min(priceLow,priceHigh,priceMid);

console.log("Minimum number: "+ priceMin);

const sumOfPrices = priceLow + priceMid + priceHigh;

console.log("Sum of products:  "+ sumOfPrices);

const priceLowFloored = Math.floor(priceLow);

const priceHighFloored = Math.floor(priceHigh);

const priceMidFloored = Math.floor(priceMid);

const sumOfFlooredPrices = priceLowFloored + priceHighFloored + priceMidFloored;

console.log("Sum of products 'floored':  "+ sumOfFlooredPrices);

const priceCeil = Math.ceil((priceLow + priceHigh + priceMid)/100)*100;

console.log("Sum of products 'ceiled to 100':  "+ priceCeil);

const sumOfPricesFlooded = Math.floor(sumOfPrices) 

const sumEvenOrNot = sumOfPricesFlooded % 2 > 0 ? "Even" : "Odd";

console.log("Flooded sum of products is "+ sumEvenOrNot);

const customerMoney = 500;

const chargeFromSum = customerMoney - sumOfPrices;

console.log("Charge from " + customerMoney + "will be "+ shargeFromSum);

const midPrice = sumOfPrices/3;

console.log("Midle price of " + midPrice + " with round to 2 number after dot will be "+ midPrice.toFixed(2));

const randSaleNum = (Math.random(100)).toFixed(2);

console.log("The sale: " + randSaleNum*100 +"%");

const anotherSumOfPrices = (priceHigh + priceLow).toFixed(2);

const salePrice = (anotherSumOfPrices * randSaleNum).toFixed(2);

const lostOfPrice = anotherSumOfPrices/2 - salePrice;

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
