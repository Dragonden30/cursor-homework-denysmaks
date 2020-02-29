const getRandomArray = (length, min, max) =>{
    const operatableArray = [];
    for(let intager = 0; intager < length; intager++){
        operatableArray.push(Math.floor(Math.random() * (max-min+1) + min));
    }
    return operatableArray;
}

const random = getRandomArray(10,1,40);
console.log(`Random : ` + random);

const getModa = (...numbers) => {

    let modeNumber = 0;
    let numberCheck = 0;
    const unDotArr = [];
    const counter = [];
    const modes = [];
    
    for(let i = 0; i < numbers.length; i++){    
        numberCheck = Math.floor(numbers[i])
        if(numberCheck === numbers[i]){            
            unDotArr.push(numbers[i]);
        }   
    }
    for(let i = 0; i < unDotArr.length; i++){
        counter[unDotArr[i]] = (counter[unDotArr[i]] || 0) + 1;
        if (counter[unDotArr[i]] > modeNumber) {
            modeNumber = counter[unDotArr[i]];
        }  
    }
    for (let i in counter)
        if (counter.hasOwnProperty(i)) {
            if (counter[i] === modeNumber) {
                modes.push(Number(i));
            }
    }
    
    return (modes + ` `);    
}    

const moda = getModa(1.1,1,1,1,2,2);
console.log(`Moda :` + moda);

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
console.log(`Avarage : ` + aver);

const getMedian = (...numbers) => {
    let numberCheck = 0;
    const newArr = [];
    if (!numbers.length) {
        return 0};
    for(let i = 0; i < numbers.length; i++){
        numberCheck = Math.floor(numbers[i]);
        if(numberCheck === numbers[i]){            
            newArr.push(numbers[i]); 
        }
    }    

    const middle = Math.floor(newArr.length / 2);    
    const isEven = newArr.length % 2 === 0;
    
    return isEven ? (newArr[middle] + newArr[middle - 1]) / 2 : newArr[middle];
}

const median = getMedian(40.1,1,2.1,10.1,20,10.1);
console.log("Median : " + median);

const filterEvenNumbers = (...numbers) =>{
    const notEven = numbers.filter((i) => i % 2 !== 0);
    return notEven;
}

const even = filterEvenNumbers(1,2,3,5,6);
console.log(`Even : ` + even);

const countPositiveNumbers = (...numbers) =>{
    let counter = numbers.filter((i) => i > 0)
    return counter.length;
}

const count = countPositiveNumbers(1, -2, -3, -5, 6);
console.log(`Count pos : ` + count);

const getDividedByFive = (...numbers) =>{
    const counterOfFive = numbers.filter((i) => i % 5 === 0);;
    return counterOfFive;
}

const divide = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(`Divide : ` + divide);

const replaceBadWords = (string) => {    
    const badWords = [`shit`,`fuck`];
    const stringIntoArr = string.split(` `);
    let result = 0;
    stringIntoArr.forEach(function(word,key){
        badWords.forEach(function(val){
            let from = word.indexOf(val);
            let to = val.length;
            if(from !==-1){
                stringIntoArr[key] = word.replace(val, `****`);
            }
        });
    });
    result = stringIntoArr.join(` `);
    return result;
}

const replace = replaceBadWords(`Are you fucking shiting kidding?`)
console.log(`Replace : ` + replace);

const divideByThree = function(string){
    let divided = [];
    for(let i = 0; i < string.length; i+=3){
        divided.push(string.substring(i, i+3));
    }
    return divided;
};

const three = divideByThree(`Kidding?`)
console.log(`Div by three : ` + three);