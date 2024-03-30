const alert = document.querySelector('.alert');

//Пункт 1
const button = document.querySelector('.btn-primary');
button.onclick = function() {
  const alertElement = alert;
  alertElement.classList.add('alert-primary');
  alertElement.textContent = 'A simple primary alert—check it out!';
};

//Пункт 2
const btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener("click", function (e) {
   const alertElement = alert;
  alertElement.classList.add('alert-primary');
  alertElement.textContent = 'A simple secondary alert—check it out!';
})

//Пункт 3
const btnSuccess = document.querySelector('.btn-success');
btnSuccess.addEventListener('mouseover',function(){
   const alertElement = alert;
  alertElement.classList.add('alert-success');
  alertElement.textContent = 'A simple success alert—check it out!';
});
btnSuccess.addEventListener('mouseout',function(){
   const alertElement = alert;
   alertElement.classList.remove('alert-success');
   alertElement.textContent = '';
})


//Пункт 4

const btnDanger = document.querySelector('.btn-danger');

btnDanger.addEventListener('focus', function(){
   const alertElement = alert;
   alertElement.classList.add('alert-danger');
   alertElement.textContent = 'A simple danger alert—check it out!';
});

btnDanger.addEventListener('focusout',function(){
   const alertElement = alert;
  alertElement.classList.remove('alert-danger');
  alertElement.textContent = '';
});

//Пункт 5


function toggleMode() {
   document.body.classList.toggle('dark-mode');
   const btnDark = document.querySelector('.btn-dark');
   const btnLight =  document.querySelector('.btn-light');
   if (document.body.classList.contains('dark-mode')) {
     btnDark.classList.add('.btn-dark');
     btnLight.classList.remove('.btn-light');
   } else {
     btnDark.classList.remove('.btn-dark');
     btnLight.classList.add('.btn-light');
   }
 };


 const buttons = document.querySelectorAll('.btn-dark');

for (const button of buttons) {
   button.addEventListener('click', toggleMode);
};

//Пункт 6

const btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('keypress', function(event){
if(event.key === 'Enter'){
   event.preventDefault();
   const alertElement = alert;
    alertElement.classList.add('alert-info');
    alertElement.textContent = 'A simple info alert—check it out!';
}
} );

//Пункт 7

const cards =document.querySelectorAll('.card');
for (const item of cards) {
   const titleElement = item.querySelector('.card-title');
   const textElement= titleElement.textContent;
   console.log(textElement);
};

//Пункт 8

for (const card of cards) {
  const button = card.querySelector('.add-to-cart');
  button.addEventListener('click', function() {
    const titleElement = card.querySelector('.card-title');
    console.log(titleElement.textContent);
  });
}

