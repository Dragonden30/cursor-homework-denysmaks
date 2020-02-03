let charecterN = prompt(`Enter First Number: `,`0`);

let numberN = parseInt(charecterN);

console.log(numberN);

console.log(typeof numberN);

let charecterM = prompt(`Enter Second Number: `,`0`);

let numberM = parseInt(charecterM);

console.log(numberM);

console.log(typeof numberM);

let hardChoice = confirm(`Do you want to kill all Even numbers?`);

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