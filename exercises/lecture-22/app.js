const classes = ['first', 'second', 'third', 'fourth'];

//пункт 1
const element = document.querySelectorAll('h1');
console.log(element);
console.log(typeof element);
console.log(element.length);

for (let index = 0; index < element.length; index++) {
   const elem = element[index];
   console.log(elem);
}

//пункт 2
const par1 = document.querySelector('#p1');
console.log(par1);
par1.style.backgroundColor = 'gold';
console.log(par1);

//пункт 3

const par2 = document.querySelector('#p2');
console.log(par1);
par2.style.backgroundColor = 'gold';
par2.style.color = 'blue';
par2.style.fontSize = '2rem';
console.log(par1);

//пункт 4
const par3 = document.querySelector('#p3');
console.log(par3);
par3.classList.add('third');
console.log(par3);

//пункт 5
const par4 = document.querySelector('#p4');
console.log(par4);
par4.classList.add('fourth' , 'border');

//пункт 6
const container =document.querySelectorAll('.container');
console.log(container);
for (let index = 0; index < container.length; index++) {
   const result = container[index].firstElementChild;
   console.log(result);
   
}

//пункт 7

const containers =document.querySelectorAll('.container');
console.log(containers);
for (let index = 0; index < containers.length; index++) {
   const element = containers[index].querySelector(':first-child');
   console.log(element);
   const textElement = element.textContent;
   console.log(textElement);
}

//пункт 8

const headers = document.querySelectorAll('.container header');
console.log(headers);

// for (let index = 0; index < headers.length; index++) {
//    const element = headers[index];
//    console.log(element);
//    const h1 = element.querySelector('h1');
//    if (h1 === 0) {
//       continue;
//    }
//    const newH = document.createElement(`h${index + 1}`);
//    newH.textContent = h1.textContent;
//    newH.id = h1.id;
//    newH.classList.add(h1.classList);
//    console.log(newH);
// }

for (let index = 0; index < headers.length; index++) {
   const element = headers[index];
   console.log(element);
   const h1 = element.querySelector('h1');
   if (h1 === 0) {
      h1.classList.add(classes[0]);
      continue;
   }
   const newH = document.createElement(`h${index + 1}`);
   newH.textContent = h1.textContent;
   newH.id = h1.id;
   newH.classList.add(h1.classList , classes[index]);
   console.log(newH);
}