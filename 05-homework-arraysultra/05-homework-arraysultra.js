let getRandomArray = (length, min, max) =>{

    let operatableArray = [];

    for(let intager = 0; intager < length; intager++){

        operatableArray.push(Math.floor(Math.random() * (max-min+1) + min));

    }

    return operatableArray;

}

const random = getRandomArray(10,1,40);

console.log(random);

let getModa = (...numbers) => {

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