const formState = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', inputFormHandle);
form.addEventListener('submit', submitFormHandle);

let emailForm = {};
function inputFormHandle(event) {
  event.preventDefault();
  emailForm.email = event.target.email;
}

function submitFormHandle(event) {
  event.preventDefault();
  emailForm.email = email.value.trim();
  emailForm.message = message.value.trim();
  console.log(emailForm);

  if (emailForm.email.length && emailForm.message.length > 0) {
    localStorage.setItem(formState, JSON.stringify(emailForm));
  }
  form.reset();
}

let savedItem = localStorage.getItem(formState);

let parcedSavedItems = JSON.parse(savedItem);

email.value = parcedSavedItems.email ?? '';
message.value = parcedSavedItems.message ?? '';
