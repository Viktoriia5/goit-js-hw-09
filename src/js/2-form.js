const formState = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', inputFormHandle);
form.addEventListener('submit', submitFormHandle);
document.addEventListener('DOMContentLoaded', renderPage);

let emailForm = {};
function inputFormHandle(event) {
  const { email, message } = event.currentTarget.elements;
  const userData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(formState, JSON.stringify(userData));
}

function submitFormHandle(event) {
  event.preventDefault();
  emailForm.email = email.value.trim();
  emailForm.message = message.value.trim();
  if (!email.value || !message.value) {
    return alert('Email or message is empty!');
  }
  console.log(emailForm);

  localStorage.removeItem(formState);
  form.reset();
}

function renderPage() {
  let savedItem = localStorage.getItem(formState);

  let parcedSavedItems = JSON.parse(savedItem);

  if (parcedSavedItems) {
    email.value = parcedSavedItems.email ?? '';
    message.value = parcedSavedItems.message ?? '';
  }
}
