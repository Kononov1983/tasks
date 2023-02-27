'use strict';

let userName = prompt('Кто там?', '');

if (userName == 'Админ') {
    alert ('Пароль?') 
    {
    let password = prompt('Пароль?', '');

    if (password == 'Я главный') {
        alert('Здравствуйте');
    }
    else if (password == null) {
        alert ('Отменено');
    }
    if (!(password == 'Я главный' || password == null)) {
        alert('Неверный пароль');
    }
    }
}
else if (userName == '' || userName == null) {
  alert ('Отменено');
}
if (!(userName == 'Админ' || userName == '' ||  userName == null))
{
  alert ('Я вас не знаю');
}