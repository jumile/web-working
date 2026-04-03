const submitButton = document.querySelector('.form__button');
const checkbox = document.getElementById('agree');

submitButton.disabled = true;

checkbox.addEventListener('change', () => {
  if (checkbox.checked) submitButton.disabled = false;
  else submitButton.disabled = true;
});
