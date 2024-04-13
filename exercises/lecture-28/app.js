const registrationForm = document.getElementById('registrationForm');
const errorMessagesDiv = document.getElementById('errorMessages');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігти оновленню сторінки при надсиланні форми

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Перевірка імені користувача
  if (!username) {
    errorMessagesDiv.innerHTML += '<p>Введіть ім\'я користувача</p>';
    return;
  }

  // Перевірка адреси електронної пошти
  if (!validateEmail(email)) {
    errorMessagesDiv.innerHTML += '<p>Неправильний формат адреси електронної пошти</p>';
    return;
  }

  // Перевірка пароля
  if (!validatePassword(password)) {
    errorMessagesDiv.innerHTML += '<p>Пароль повинен містити принаймні 8 символів, одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ</p>';
    return;
  }


  // Скидання форми після успішної реєстрації
  registrationForm.reset();
  errorMessagesDiv.innerHTML = '';
});

// Функція для перевірки адреси електронної пошти
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)@(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)$/i;
  return re.test(email);
}

// Функція для перевірки пароля
function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*()_+=-\[\]{};':"\\|,.<>\/?])[A-Za-z0-9!@#\$%\^&*()_+=-\[\]{};':"\\|,.<>\/?]{8,}$/;
  return re.test(password);
}