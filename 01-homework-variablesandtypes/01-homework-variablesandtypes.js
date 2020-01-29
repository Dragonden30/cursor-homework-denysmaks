let PriceLow = 15.678;

let PriceHigh = 123.965;

let PriceMid = 90.2345;

let PriceMax = Math.max(PriceLow,PriceHigh,PriceMid);

console.log("Maximum number: "+ PriceMax);

let PriceMin = Math.min(PriceLow,PriceHigh,PriceMid);

console.log("Minimum number: "+ PriceMin);

let SumOfPrices = PriceLow + PriceMid + PriceHigh;

console.log("Sum of products:  "+ SumOfPrices);

let PriceLowFloored = Math.floor(PriceLow);

let PriceHighFloored = Math.floor(PriceHigh);

let PriceMidFloored = Math.floor(PriceMid);

let SumOfFlooredPrices = PriceLowFloored + PriceHighFloored + PriceMidFloored;

console.log("Sum of products 'floored':  "+ SumOfFlooredPrices);

let PriceCeil = Math.ceil((PriceLow + PriceHigh + PriceMid)/100)*100;

console.log("Sum of products 'ceiled to 100':  "+ PriceCeil);

let SumOfPricesFlooded = Math.floor(SumOfPrices) 

let SumEvenOrNot = SumOfPricesFlooded % 2 ? true : false;

let ResultOfEvenOdd = 0;

if (SumEvenOrNot = true)
{ ResultOfEvenOdd = "Even";
}else{
    ResultOfEvenOdd = "Odd";
}; 

console.log("Flooded sum of products is "+ ResultOfEvenOdd);

let ChargeFromSum = 500 - SumOfPrices;

console.log("Charge from 500 will be "+ ChargeFromSum);

let MidPrice = SumOfPrices/3;

console.log("Midle price of " + MidPrice + " with round to 2 number after dot will be "+ MidPrice.toFixed(2));

let RandSaleNum = (Math.random(100)).toFixed(2);

console.log("The sale: " + RandSaleNum*100 +"%");

let AnotherSumOfPrices = (PriceHigh + PriceLow).toFixed(2);

let SalePrice = (AnotherSumOfPrices * RandSaleNum).toFixed(2);

let LostOfPrice = AnotherSumOfPrices/2 - SalePrice;

console.log("The lost of price will be: " + AnotherSumOfPrices/2 + " - " + SalePrice + " -> " + LostOfPrice.toFixed(2));

document.writeln(`Шаблонная строка:
Максимальное число: ${PriceMax};
Минимальное число: ${PriceMin};
Сума цены продуктов: ${SumOfPrices};
Сума цены продуктов 'floored': ${SumOfFlooredPrices};
Сума цены продуктов 'ceiled to 100':   ${PriceCeil};
Округленное меньшую сторону cума цены продуктов:  ${ResultOfEvenOdd};
Сдача из 500: ${ChargeFromSum};
Средняя цена: ${MidPrice.toFixed(2)};
Скидка: ${RandSaleNum*100}%;
Потеря прибыли будет: ${AnotherSumOfPrices/2} - ${SalePrice} -> ${LostOfPrice.toFixed(2)};
`);
