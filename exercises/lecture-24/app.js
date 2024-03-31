

// Пункт 1
const colors = ['blue', 'green', 'white'];
function iter(item) {
   console.log(item);
}
colors.forEach(iter);

// Пункт 2

// function iterate(item, index) {
//    alert(`${item} has index ${index}`);
// };
// colors.forEach(iterate);

// Пункт 3

const letters = ['a', 'b', 'c'];

function iterate(letter) {
   console.log(this === window);
};
console.log(letters.forEach(iterate));


// Пункт 4
const Numbers = [22, 3, 4, 10];

Numbers.forEach(function(number) {
   if (number % 2 === 0) {
     console.log(number);
   }
});

// Пункт 5

const numbers = [22, 3, 4, 10];

const everyNumbers = numbers.every(function(number) {
   return number %2 === 0;
   
});

console.log(everyNumbers);

// Пункт 6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const indexFruit = fruits.findIndex(fruit => fruit === 'blueberries');
console.log(` index ${indexFruit}`);


// Пункт 7

const arr = [7, 33, 47, 99, 2, 103, 79];

const findArr = arr.find(num => num > 10);
console.log(findArr);

// Пункт 8

const array = [1, 2, 3, 4, 5];

const someArray = array.some(item => item % 2 === 0);
console.log(someArray);

// Пункт 9

const num = [1, 30, 4, 21, 100000];
const sortNum = num.sort(function (a , b) {
   return a - b;
});
console.log(sortNum);