
let getMaxDigit = (userNumber) => {

    if(userNumber == 0){ 
        
        return 0;
    
    }else{
        
      return Math.max(userNumber%10, getMaxDigit(Math.floor(userNumber/10)));

    }

}

let getPowNumber = (userNumberForPower,userPowNumber) => {

    let resultOfPow = userNumberForPower;

    for (n=1; n < userPowNumber; n++){

        resultOfPow = resultOfPow * userNumberForPower;

    }

    return console.log(`Result of getPowNumber function = ` + resultOfPow + ` .`);

}

let userNameFixed = (userName) => {
    
    let userNameSliced = userName.slice(1, userName.length);

    return console.log(`Result of userNameFixed = ` + userName[0].toUpperCase() + userNameSliced.toLowerCase() + ` . `);

}

let userBillPayCalc = (userSalary) => {

    let billPrice = userSalary * 0.2;

    return console.log(`Result of userBillPayCalc =` + (userSalary - billPrice) + ' .');

}

let getRandomInt = (min, max) => {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min; 
  
}

let userLetterCount = (letter, word) => {

 let counter = 0;

 word = word.toLowerCase();
 
 letter = letter.toLowerCase();

for (place = 0; place < word.length; place++) {

    if (word.charAt(place) == letter) {

        counter += 1;

    }

}

  return console.log(`Result of userLetterCount = ` + counter + `;`);

}

let convertCurrency = (currency) => {

    let convertedCurrency = 0;
 
    if (currency.substr(-1) == `$`) {
    
        currencySliced = Number(currency.slice(0, currency.length-1));

        convertedCurrency = currencySliced * 24;

        return console.log(`Result of convertCurrency = ` + convertedCurrency + ` .`);
    
    }
    
    if (currency.substr(-3) == `UAH`) {

        currencySliced = Number(currency.slice(0, currency.length-3));

        convertedCurrency = currencySliced / 24;

        return console.log(`Result of convertCurrency = ` + convertedCurrency + ` .`);

    }

    else{

        return console.log(`undefiend`);
        
    }

}

let getRandPass = (length) => {

    let randNumber = 0;

    if(length){

    randNumber = Math.floor(Math.random() * (10**length));

    }
    else{

        randNumber = Math.floor(Math.random() * (10**8));

    }
    return console.log(`Result of getRandPass = ` + randNumber);

}

let deleteLetters = (letter,word) => {

    let counter = 0;

    let wordReplaced = 0;

    word = word.toLowerCase();
 
    letter = letter.toLowerCase();
    
    for (place = 0; place < word.length; place++) {

        if (word.charAt(place) == letter) {
    
            counter += 1;
    
        }
    
    }

    wordReplaced = word.replace(letter, ``);

    for (cycle = 0; cycle < counter; cycle++){

        wordReplaced = wordReplaced.replace(letter, ``);
        
    }

    return console.log(`Reult of deleteLetters = ` + wordReplaced + `;`);

}

deleteLetters(`a`,`blablabla`);