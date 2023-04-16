import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput() {
  formData = {
    email: `${formEl.elements.email.value}`,
    message: `${formEl.elements.message.value}`,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function savedForm() {
  const savedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedFormData !== null) {
    formEl.elements.email.value = savedFormData.email;
    formEl.elements.message.value = savedFormData.message;
  }
}


savedForm();
