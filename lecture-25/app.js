

// пункт 1
const list = ['html', 'css', 'javascript', 'react.js'];

const ul = document.createElement('ul');

list.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

document.body.appendChild(ul);


// пункт 2

const listWithHref = [
   {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
   {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
   {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
   {'react.js': "https://react.dev"}
]; 

const olList = document.createElement('ol');
listWithHref.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = Object.keys(item)[0];
  a.href = Object.values(item)[0];
  li.appendChild(a);
  olList.appendChild(li);
});

document.body.appendChild(olList);

// пункт 3
const students = [
   {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
   {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
   {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
   {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
];


const tabels = document.createElement('table');
const thead = document.createElement('thead');
const trHead = document.createElement('tr');
const thFirstName = document.createElement('th');
const thLastName = document.createElement('th');
const thDegree = document.createElement('th');

thFirstName.textContent = 'Ім\'я';
thLastName.textContent = 'Прізвище';
thDegree.textContent = 'Бал';

thFirstName.style.backgroundColor = 'blue'; 
thFirstName.style.color = 'azure'; 
thLastName.style.backgroundColor = 'blue'; 
thLastName.style.color = 'azure'; 
thDegree.style.backgroundColor = 'blue'; 
thDegree.style.color = 'azure'; 


trHead.appendChild(thFirstName);
trHead.appendChild(thLastName);
trHead.appendChild(thDegree);
thead.appendChild(trHead);


const tbody = document.createElement('tbody');
students.forEach(student => {
  const tr = document.createElement('tr');
  const tdFirstName = document.createElement('td');
  const tdLastName = document.createElement('td');
  const tdDegree = document.createElement('td');

  tdFirstName.textContent = student.firstName;
  tdLastName.textContent = student.lastName;
  tdDegree.textContent = student.degree;

  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdDegree);
  tbody.appendChild(tr);
});

// Додавання заголовків та рядків до таблиці
tabels.appendChild(thead);
tabels.appendChild(tbody);

// Додавання таблиці до DOM-дерева
document.body.appendChild(tabels);
