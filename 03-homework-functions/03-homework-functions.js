
const getMaxDigit = (userNumber) => {

    if(userNumber == 0){ 
        
        return 0;
    
    }else{
        
        return Math.max(userNumber%10, getMaxDigit(Math.floor(userNumber/10)));

    }

}

const getPowNumber = (userNumberForPower,userPowNumber) => {

    let resultOfPow = userNumberForPower;

    if(userPowNumber == 0) {
        
        resultOfPow = 1;

    }
    else {

        for (let n=1; n < userPowNumber; n++){

        resultOfPow = resultOfPow * userNumberForPower;

        }

    }

    return  resultOfPow;

}

const userNameFixed = (userName) => {
    
    let userNameSliced = userName.slice(1, userName.length);

    return userName[0].toUpperCase() + userNameSliced.toLowerCase();

}

const userBillPayCalc = (userSalary) => {

    const billSize = 0.2;

    const billPrice = userSalary * billSize;

    return userSalary - billPrice;

}

const getRandomInt = (min, max) => {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min ; 
  
}

const userLetterCount = (letter, word) => {

 let counter = 0;

 word = word.toLowerCase();
 
 letter = letter.toLowerCase();

for (let place = 0; place < word.length; place++) {

    if (word.charAt(place) == letter) {

        counter ++;

    }

}

  return counter;

}

const convertCurrency = (currency) => {

    let convertedCurrency = 0;

    const dollarToHrivna = 24;
 
    if (currency.substr(-1) == `$`) {
    
        currencySliced = Number(currency.slice(0, currency.length-1));

        convertedCurrency = currencySliced * dollarToHrivna;

        return convertedCurrency;
    
    }
    
    if (currency.substr(-3) == `UAH`) {

        currencySliced = Number(currency.slice(0, currency.length-3));

        convertedCurrency = currencySliced / dollarToHrivna;

        return convertedCurrency;

    }

    else{

        throw new Error(`Invalid data`);
        
    }

}

const getRandPass = (length) => {

    let randNumber = 0;

    if(length){

    randNumber = Math.floor(Math.random() * (10**length));

    }
    else{

        randNumber = Math.floor(Math.random() * (10**8));

    }
    return randNumber

}

const deleteLetters = (letter,word) => {

    let counter = 0;

    let wordReplaced = 0;

    word = word.toLowerCase();
 
    letter = letter.toLowerCase();
    
    for (let place = 0; place < word.length; place++) {

        if (word.charAt(place) == letter) {
    
            counter ++;
    
        }
    
    }

    wordReplaced = word.replace(letter, ``);

    for (let cycle = 0; cycle < counter; cycle++){

        wordReplaced = wordReplaced.replace(letter, ``);
        
    }

    return wordReplaced;

}

const isPolyndrom = (string) => {

    let replaceAllPunctuationMarks = /[^A-Za-z0-9]/g;

    string = string.toLowerCase().replace(replaceAllPunctuationMarks, '');

    let stringLength = string.length;

    for (let position = 0; position < stringLength/2; position++) {

      if (string[position] !== string[stringLength - 1 - position]) {

          return false;

      }

    }

    return true;

}

const deleteDuplicateLetter = (string) => {

    let nonDublicateLetters = [];

    let dyblicatesLetters = [];

    string.split('').filter(function(letter) {

      if(nonDublicateLetters.indexOf(letter) == -1) {

        nonDublicateLetters.push(letter);

      } 

      else {

        dyblicatesLetters.push(letter);

      }

    });
    
    let resultOfUnDublicatism = nonDublicateLetters.filter(function(lettrerTwo) {
    
        if(dyblicatesLetters.indexOf(lettrerTwo) == -1) {

        return lettrerTwo;

    }

    });
    
    return resultOfUnDublicatism;
}

console.log(`Result of getMaxDigit = ` + getMaxDigit(12365) + `;`);
console.log(`Result of getPowNumber = ` + getPowNumber(3,6) + `;`);
console.log(`Result of getPowNumber = ` + getPowNumber(3,0) + `;`);
console.log(`Result of userNameFixed = ` + userNameFixed(`KrEkHeAd`) + `;`);
console.log(`Result of userBillPayCalc =` + userBillPayCalc(12000) + `;`);
console.log(`Result of getRandomInt = ` + getRandomInt(6,9) + `;`);
console.log(`Result of userLetterCount = ` + userLetterCount(`a`,`Altzgamer`) + `;`);
console.log(`Result of convertCurrency = ` + convertCurrency(`1000UAH`) + `;`);
console.log(`Result of convertCurrency = ` + convertCurrency(`100$`) + `;`);
console.log(`Result of getRandPass = ` + getRandPass(7) + `;`);
console.log(`Reult of deleteLetters = ` + deleteLetters(`f`,`Fansy Fransis plays on fanfars`) + `;`);
console.log(`Result of isPolundome = ` + isPolyndrom(`Shrekerhs`) + `;`);
console.log(`Result of deleteDuplicateLetter = ` + deleteDuplicateLetter(`Ekspansia`) + `.`);

