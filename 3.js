// Problem:
// Write a JavaScript function countVowels that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string.


const sentence="the quick brown fox jumps over the lazy dog,the quick brown fox jumps over the lazy dog"

const countVowels=(letter)=>{
let str=''
    let sum=0;
for(const a of letter){

    // console.log(typeof a)
    if((a==='a')||(a==='e')||(a==='i')||(a==='o')||(a==='u')){
str=a+str;
        sum++
    }
}
console.log(str)
return sum;
}
const output=countVowels(sentence.toLowerCase());
console.log(output)