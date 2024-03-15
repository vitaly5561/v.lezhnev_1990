"use strict";

//пункт 1
/*const person = {
   name: 'Boris',
   age:32,
}*/
//console.table(person);
/*console.log(person.name);
console.log(person.age);*/

//пункт 2
/*person.name = {
   firstName: 'Jan',
   lastName:'Klod',
}
console.table(person);
console.log(person.name.firstName);
console.log(person.name.lastName);
*/

//пункт 3
//Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.

/*const person = {
   name: {
      firstName: 'Jan',
      lastName: 'Klod',
   },
   age: 32,

   bio() {
       return `${this.name.firstName}  ${this.name.lastName}  ${this.age}`;
   },
}

console.log(person.bio());*/

//пункт 4
//introduceSelf
/*const person = {
   name: {
      firstName: 'Jan',
      lastName: 'Klod',
   },
   age: 32,

   bio() {
      return `${this.name.firstName}  ${this.name.lastName}  ${this.age}`;
   },

   introduceSelf(firstName) {
      return `Hi! I'm  ${firstName}`;
   }
}

console.log(person);
console.log(person.introduceSelf('Tom'));*/

//пункт 5
const createPerson = function (name) {
  this.name = name;
  this.introduceSelf = function () {
    return `Hello ${this.name}`;
  };
};

const mary = new createPerson("Мері");
const tom = new createPerson("Том");
console.log(mary);
console.log(mary.introduceSelf());
console.log(mary.prop); // виведе undefined, тому що немаэ такої властівості

console.log(tom);
console.log(tom.introduceSelf());

//пункт 6
/*
const DirtyMartini = function (gin, vermouth, olive_jar, olives) {
  this.gin = gin;
  this.vermouth = vermouth;
  this.olive_jar = olive_jar;
  this.olives = olives;

  this.english_please = function (gin, vermouth, olive_jar, olives) {
    console.log(`${this.gin}  ml de gin`);
    console.log(`${this.vermouth} trait de vermouth sec (0.0351951ml)`);
    console.log(`${this.olive_jar} ml de saumure du pot d'olive `);
    console.log(`${this.olives} olives vertes farcies`);
  };

  this.excuse_my_french = function (gin, vermouth, olive_jar, olives) {
    console.log(`${this.gin} fluid ounces gin`);
    console.log(`${this.vermouth} dash dry vermouth`);
    console.log(`${this.olive_jar} fluid ounce brine from olive jar `);
     console.log(`${this.olives} stuffed green olives`);
    
  };
};

const ing1 = new DirtyMartini(10, 10, 10, 10);
const ing2 = new DirtyMartini(1, 1, 1, 1);

console.log(ing1);
ing1.english_please();


console.log(ing2);
ing2.excuse_my_french();*/
