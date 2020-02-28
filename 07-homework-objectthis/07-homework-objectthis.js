const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
    return this.tax * salary;
}

console.log("getMyTaxes function result :");
console.log(getMyTaxes.call(ukraine, 2000));

function getMiddleTaxes(country){
    return this.tax * this.middleSalary;
}

console.log("getMiddleTaxes function results :");
console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes(country){
    return this.tax * this.middleSalary * this.vacancies;
}

console.log("getTotalTaxes function results :");
console.log(getTotalTaxes.call(ukraine));

function getRandTaxes(country){
    setInterval(() => {
        const min = 1500;
        const max = 2000;
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        console.log({
            number: number,
            taxes: Math.floor(this.tax * number),
            profit: number- Math.floor(this.tax * number)
        });
    }, 10000);
}

console.log("getTotalTaxes function results :");
getRandTaxes.call(ukraine)