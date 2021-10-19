/*let sentence = prompt("kindly input a sentence");
console.log (sentence);

function character(sentence){
    let first = sentence.charAt(0);
   let last= sentence.charAt(sentence.length -1);
let characters = first.concat(last).toUpperCase ;
return characters
console.log (characters);
}
function reverse(){
    let rev = [...characters].reverse().join("");
    console.log(reverse);
}
function callback(){

}*/






/*let sentence = prompt("kindly input a sentence");
let firstCharacter = sentence.charAt(0);
let secondCharacter = sentence.charAt(sentence.length -1);
let characters = firstCharacter.concat(secondCharacter);
let upperCharacter = characters.toUpperCase();
let rev = [...upperCharacter].reverse().join("");
let conrev = sentence.concat(rev);
let length1 = sentence.length;
let divide = length1/2 ;
let rounding = Math.floor(divide);
let res = sentence.charAt(rounding);
let newSentence = res.concat(sentence);
let finalReverse = [...newSentence].reverse().join("");
console.log (rounding, divide, res);

function Q1(upperCharacter){
    return upperCharacter;
}

function Q2(rev){
    return rev;
}
function Q3(){
    return ;
}
function Q4(){
    return ;
}


/*$(document).ready(function() {
      
      $("p").click(function() {
        document.writeIn(sentence);
      });
      $("a").click(function() {
        document.write(finalReverse);
      });
    })*/




    
   // prompting a user for a sentence;
   let sentence = prompt("kindly input a sentence");
   console.log (sentence);

   //first and last character of the sentence
 function character(sentence) {
    let firstCharacter = sentence.charAt(0).toUpperCase();
    let lastCharacter= sentence.charAt(sentence.length -1).toUpperCase();
    let concat1 = firstCharacter.concat(lastCharacter);
    return concat1;
 document.write(character(sentence));
 }
  // second function to reverse the order of the first function
 function reversedCharacter(character,sentence){
    let rev = [...character(sentence)].reverse().join("");
    return rev ;
    document.write(rev);
 }
// third function to call other two functions
function callOtherFunction(sentence,character,reversedCharacter) {
    let newConcat = sentence.concat(rev);
    return newConcat;
}

// fourth function to count the sentence
function counting(sentence) {
    let length1 = sentence.length;
let divide = length1/2 ;
let rounding = Math.floor(divide);
let res = sentence.charAt(rounding);
let newSentence = res.concat(sentence);
let finalReverse = [...newSentence].reverse().join("");
}
