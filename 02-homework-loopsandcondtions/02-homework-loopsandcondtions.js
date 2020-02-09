// let charecterN = prompt(`Enter First Number: `,`0`);

// let numberN = parseInt(charecterN);

// while ( !numberN ){
    
//     charecterN = prompt(`Please insert First Number: `,`0`);

//     numberN = parseInt(charecterN);

// }

let numberN = null;

while( !numberN) {

numberN =Number(prompt(`Please insert First Number: `, 0));

}

console.log(numberN);

console.log(typeof numberN);

// let charecterM = prompt(`Enter Second Number: `,`0`);

// let numberM = parseInt(charecterM);

// while ( !numberM ){

//     charecterM = prompt(`Please insert the Second Number: `,`0`);

//     numberM = parseInt(charecterM);

// }

let numberM = null;

while( !numberM) {

numberM =Number(prompt(`Please insert Second Number: `, 0));

}

console.log(numberM);

console.log(typeof numberM);

const hardChoice = confirm(`Do you want to kill all Even numbers?`);

console.log(hardChoice);

let numberSet = new Set(); // добавил по приколу чтоб проверять себя

let operatNum = 0;

if (hardChoice){

    while (numberN <= numberM){

        if((numberN % 2) != 0){

            numberSet.add(numberN);

            operatNum = operatNum + numberN;

            numberN++;

            continue;

        }else{

        numberN++;
    
    }
    
        console.log(numberSet);

        console.log(numberN);

        console.log(operatNum);
    }

    alert(operatNum);

}else{

    while (numberN <= numberM){

        numberSet.add(numberN);
                    
        operatNum = operatNum + numberN;

        numberN++;
    
        console.log(numberSet);

        console.log(numberN);

        console.log(operatNum);

    }

    alert(operatNum);

}