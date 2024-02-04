// Define a function calculateArea that takes the radius of a circle as input and returns the area of the circle. 

function calculateArea(number){

const R=3.1416;
const area= (R * number ** 2).toFixed(2);

return area;

}
const output=calculateArea(parseFloat(10));
console.log(output)