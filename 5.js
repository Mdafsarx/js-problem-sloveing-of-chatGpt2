/*Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming*/

const string='the quick brown fox down over the lazy dog'

const longestWord=function (letter){
let string2='';
const letterSplit=letter.split(' ');
let maxLength=0;
for(const i of letterSplit){
const Length=i.length;
if(Length>maxLength){

    maxLength=Length;
    string2=i;

}    

}
console.log(maxLength)
return string2;

}
const output=longestWord(string);
console.log(output)