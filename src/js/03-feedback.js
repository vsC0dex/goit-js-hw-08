import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const inputEl = document.querySelector('input');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  
  const formData = { email: inputEl.value, message: textarea.value };
  
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {

  evt.preventDefault();
  // console.log(evt.currentTarget);
  // console.log(evt.currentTarget.mail.value);
  if (evt.currentTarget.email.value === '' || evt.currentTarget.message.value === '') {
    alert('Ti sho?')
  } else {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
  evt.currentTarget.reset();
  }
  
}

function cheksStorage() {
  const parseSavedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (parseSavedData) {
    inputEl.value = parseSavedData.email;
    textarea.value = parseSavedData.message;
  } else {
    inputEl.value = '';
    textarea.value = '';
  }
}
cheksStorage();

console.log('Hello');