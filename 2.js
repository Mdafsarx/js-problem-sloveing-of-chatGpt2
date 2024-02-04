// Problem:
// Write a JavaScript function calculateAverage that takes an array of numbers as input and returns the average of all the numbers in the array.

const array=[10,20,30,40,50]


function calculateAverage(numbers){
const Length=numbers.length;
let sum=0;
    numbers.forEach(number => {

sum=sum+number;
    });

    const average=sum / Length;
    return average;


}
const output=calculateAverage(array)
console.log(output)



