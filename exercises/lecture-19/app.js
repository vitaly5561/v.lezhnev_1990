"use strict";

//пункт 1

/*let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

console.log(str1.length);
console.log(str2.length);


let str3 = (str1 == str2);
console.log(str3);

let str4 = (str1 === str2);
console.log(str4);*/

//пункт 2

//let string5 = 'Hello World';

//console.log(string5[0]);
//console.log(string5.charAt(0));

//пункт 3

// повернути символ J рядка:

//let str3 = "Hello Javascript";
//alert(str3.charAt(6));

//пункт 4
/*let str3 = "Hello Javascript";
console.log(str3.length);
//1 спосіб
console.log(str3[str3.length-1]);
//2 спосіб
console.log(str3.at(-1));*/

//пункт 5 Напишіть три варіанти функції lastChar, що повертає останній символ рядка

//let str3 = "Hello Javascript";

//1 спосіб
/*function lastChar() {
   console.log(str3[15]);
}
lastChar();*/

//2 спосіб
/*function lastChar() {
   console.log(str3[str3.length - 1]);
}
lastChar( ); */

//3 спосіб
/*function lastChar() {
   console.log(str3.at(-1));
}
lastChar( ); */

//пункт 6
/*let a = 'When candles are out,';
let b = 'all cats are grey.';

let result = a.concat(b);
console.log(result);*/

//пункт 7

/*let fact = "Fifteen is the same as"
let a = 5;
let b = 10;

let sum = a + b;
console.log(fact = `Fifteen is the same as ${sum}`);*/

//пункт 8
/*let firstName = "Tom";
let lastName = "Cat";

function getFullName(firstName, lastName) { 
   let result = `${firstName}  ${lastName}`;
   return result;
}

console.log(getFullName('Tom','Cat'))*/

//пункт 9

/*let getFullName = function () {
  return "Hello, Tom Cat!";
};

console.log(getFullName());

function greeting(getFull) {
  return getFull;
}

console.log(greeting(getFullName()));*/

//пункт 10  <div><h1>Hello, Tom Cat!</h1></div>

/*function greeting(cont) {
  cont = "<div>" + "<h1>Hello, Tom Cat!</h1>" + "</div>";
  return cont;
}

console.log(greeting());*/

//пункт 11

/*let string1 = "  The name of our game  ";
// Потрібно отримати такі результати
// "The name of our game"
console.log(string1.trim());
// "The name of our game  "
console.log(string1.trimStart());
// "  The name of our game"
console.log(string1.trimEnd());*/

/*const phoneNumber = "\t  555-123\n ";
// Потрібно отримати такі результати
// => '555-123'
let phone =  phoneNumber.split(/\s+/)
console.log(phone[1]);
// => '555-123 \n'
console.log(phone[1], phone[2]);*/

//пункт 12
/*let sentence = "Always look on the bright side of life";

console.log(sentence.includes('look up'));
console.log(sentence.includes('look on'));
console.log(sentence.slice(8).includes('look on'));*/

//пункт 13
/*let sentence = 'Always look on the bright side of life';

console.log(sentence.indexOf('l')); 
console.log(sentence.indexOf('l' , 3)); 
console.log(sentence.indexOf('L')); 
*/

//пункт 14

//let sentence = 'Always look on the bright side of life';

//let pattern = /look on the bright side of life/;
//console.log(sentence.search(pattern));

//let pattern = /Always/;
//console.log(sentence.search(pattern));

//let pattern = /look/;
//console.log(sentence.search(pattern));

//пункт 15
//let patterName = /^[a-z0-9_-]{8,16}$/;

// пункт 16
//let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//пункт 17
//let sentence =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.";

/*function getSubstring() {
   if (sentence.length > 50) {
      sentence = sentence.substring(0, 50);
      return sentence;
   }
   else {
      console.log('no text');
   }
}

console.log(getSubstring());*/

/*function getSubst() {
  if (sentence.length > 50) {
    sentence = sentence.substr(0, 50);
    return sentence;
  } else {
    console.log("no text");
  }
}

console.log(getSubst());*/
