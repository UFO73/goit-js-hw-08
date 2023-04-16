
// import throttle from 'lodash.throttle';

// const LOCALSTORAGE_KEY = "feedback-form-state";
// const formEl = document.querySelector('.feedback-form');


// formEl.addEventListener('submit', onFormSubmit);
// formEl.addEventListener('input', throttle(onFormInput, 500));

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   const formData = new FormData(formEl);
//   formData.forEach((value, name) => console.log(value, name));
//   evt.currentTarget.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// }

// function onFormInput(evt) {
//   let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//   persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
//   persistedFilters[evt.target.name] = evt.target.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
// }

// function initForm() {
//   let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//   if (persistedFilters) {
//     persistedFilters = JSON.parse(persistedFilters);
//     Object.entries(persistedFilters).forEach(([name, value]) => {
//       formEl.elements[name].value = value;
//     });
//   }
// }

// initForm();


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
