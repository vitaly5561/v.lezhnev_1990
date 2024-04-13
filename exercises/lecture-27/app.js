const ul = document.querySelector('ul');
const input = document.getElementById('item');



let itemsArray = JSON.parse(localStorage.getItem('items')) || [];
console.log(itemsArray);


function addTask(text) {
   const li = document.createElement('li');
   li.textContent = text;
   ul.appendChild(li);
}

function add() {
   const text = input.value.trim();
      if (text) {
        itemsArray.push(text);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addTask(text);
        input.value = '';
      }
}

function del() {
   localStorage.removeItem('items');
      itemsArray = [];
      ul.innerHTML = '';
}

console.log(itemsArray.forEach(addTask));