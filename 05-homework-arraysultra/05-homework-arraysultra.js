const getRandomArray = (length, min, max) =>{

    let operatableArray = [];

    for(let intager = 0; intager < length; intager++){

        operatableArray.push(Math.floor(Math.random() * (max-min+1) + min));

    }

    return operatableArray;

}

const random = getRandomArray(10,1,40);

console.log(random);

const getModa = (...numbers) => {

    let modeNumber = 0;

    let counter = 0;

    let numberCheck = 0;

    for(let i = 0; i < numbers.length; i++){
    
        numberCheck = Math.floor(numbers[i])

        if(numberCheck === numbers[i]){
            
            for(let j = 0; j < i; j++){
    
                if(numbers[j] === numbers[i]){
    
                modeNumber = numbers[j];
    
                counter++;
    
                }
    
            }

        }
        else{

            let remove = numbers.slice(i , 1);

        }
    
    }
    
    return modeNumber;
    
}    

const moda = getModa(40.1,1,1,10.1,20,10.1);

console.log(moda);

const getAverage = (...numbers) =>{

    let numberCheck = 0;

    let counterOfNumbers = 0;

    let remove = 0;

    let counter = 0;

    for(let i = 0; i < numbers.length; i++){

        numberCheck = Math.floor(numbers[i]);

        if(numberCheck === numbers[i]){
            
            counterOfNumbers = counterOfNumbers + numbers[i];

        }
        else{

            remove = numbers.slice(i , 1);

            counter++;

        }
        
    }

    return counterOfNumbers / (numbers.length - counter);

}

const aver = getAverage(40.1,1,1,10.1,20,10.1);

console.log(aver);

const getMedian = (...numbers) => {
    
    if (!numbers.length) {return 0};
    
    let sortNumbers = numbers.slice(0).sort((a,b) => a - b);
    
    let middle = Math.floor(numbers.length / 2);
    
    let isEven = numbers.length % 2 === 0;
    
    return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];

}

const median = getMedian(40.1,1,1,10.1,20,10.1);

console.log(median);

const filterEvenNumbers = (...numbers) =>{

    const counterOfEven = [];

    for(let i = 0; i < numbers.length; i++){

        if(numbers[i] % 2){
            
            counterOfEven.push(numbers[i]);

        }
        
    }

    return counterOfEven;
}

const even = filterEvenNumbers(1,2,3,5,6);

console.log(even);

const countPositiveNumbers = (...numbers) =>{

    let counter = 0;

    for(let i = 0; i < numbers.length; i++){

        if(numbers[i] > 0){
            
            counter++;

        }
        
    }

    return counter;
}

const count = countPositiveNumbers(1, -2, -3, -5, 6);

console.log(count);

const getDividedByFive = (...numbers) =>{

    const counterOfFive = [];

    for(let i = 0; i < numbers.length; i++){

        if(!(numbers[i] % 5)){
            
            counterOfFive.push(numbers[i]);

        }
        
    }

    return counterOfEven;
}

const divide = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

console.log(divide);

