/*

Problem:
Write a JavaScript function getGrade that takes a score as input and returns the corresponding grade based on the following grading scale:

Score >= 90: A
Score >= 80: B
Score >= 70: C
Score >= 60: D
Score < 60: F
*/


const getGrade=function (mark){

    

    switch(true){
case (mark>= 90 && mark<100): return 'A';
case (mark>=80 && mark<90):return 'B';
case (mark>=70 && mark<80):return 'C'
case (mark>=60 && mark<70):return 'D'
case (mark<60):return 'F';
    default:return`${mark} is invalid`

    }


}
const result=getGrade(parseInt(90.9))
console.log(result)