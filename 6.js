/*
Problem:
Create a JavaScript function createPerson that takes parameters for the name, age, and gender of a person and returns an object representing the person with those properties.*/




function createPerson(name,age,gender,...info){

    return {

name:name,
age:age,
gender:gender,
info:null
    }



}
const output=createPerson('afsar',20,'male');
console.log(output)