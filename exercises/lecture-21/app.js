'use stric'
const fruits = 'apple banana cantaloupe blueberries grapefruit';

//Пункт 1
const arrFruits = fruits.split(' ');
console.log(arrFruits);

//Пункт 2
// for (let index = 0; index < arrFruits.length; index++) {
//    const element = arrFruits[index];
//    console.log(element);
// }

//Пункт 3
//  let index= 0;
//  while(index < arrFruits.length) {
//    const element = arrFruits[index];
//    console.log(element);
//    index++;
// }

//Пункт 4
// let index = 0 ;
// do {
//    console.log(arrFruits[index]);
//    index++;
// } while (index < arrFruits.length);

//Пункт 5
// for (const element of arrFruits) {
//    console.log(element);
// }

const Numbs = [1,2,3,4,5,6,7,8,9,10];

//Пункт 6
// for (const key in Numbs) {
//    if (key %2 == 0) {
//          console.log(Numbs[key])
//       }
//    }



//Пункт 7
//const names = ['Batman',];
// const pushElement = names.push('Joker');
// console.log(names);

//Пункт 8
// const unshiftElement = names.unshift('Joker');
// console.log(names);

//Пункт 9
//names = ['Batman', 'Joker', 'Bane'];
// const unshiftElement = names.unshift( 'Catwoman');
// console.log(names);

//Пункт 10

// let names = ['Batman', 'Joker', 'Bane'];

// names = ['Catwoman','Batman', 'Joker', 'Bane' ];
// console.log(names);

//Пункт 11

// names[1] = 'Catwoman';
// console.log(names);

//Пункт 12
// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

// let spliceNames = names.splice(1, 2);
// console.log(names);


//Пункт 13

// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

// names.splice(names.indexOf('Catwoman'), 1, 'Alfred');
// names.splice(names.indexOf('Joker'), 1, 'Alfred');

// console.log(names);

//Пункт 14

// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];


// if (!names.includes('alfred')) {
//     names.push('alfred');
// }

// console.log(names);

//Пункт 15
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

if (names.includes('Alfred')) {
  names.splice(names.indexOf('Alfred'), 1);
}

console.log(names);
