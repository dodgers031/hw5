const anArray = [];
for (i = 1; i <= 10; i++) {
    anArray.push(i);
}

console.log(anArray);

//An array of odd numbers
const oddNumbers = anArray.filter(x => x % 2 === 1);
console.log(oddNumbers);
//An array of all the numbers divisible by 2 or 5
const divBy2or5 = anArray.filter(y => y % 2 === 0 || y % 5 === 0);
console.log(divBy2or5); 
//An array of numbers divisible by 3 squared
const arraySquared = anArray.filter(square => square % 3 === 0).map(square => square**2);
console.log(arraySquared);
//The sum of the numbers divisible by 5 squared
const divby5sum = anArray.filter(sum5 => sum5 % 5 === 0).map(sum5 => Math.pow(sum5,2)).reduce((sum,x) => sum + x , 0);
console.log(divby5sum);
