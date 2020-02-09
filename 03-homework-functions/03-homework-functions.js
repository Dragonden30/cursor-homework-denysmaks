
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

userNameFixed(`DaViD`);