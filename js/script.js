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


let sentence = prompt("kindly input a sentence");
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
let finalReverse =  [...newSentence].reverse().join("");
console.log (rounding, divide, res);
