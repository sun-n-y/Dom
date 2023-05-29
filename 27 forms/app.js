//forms

//select elements
const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

//event listener for submit and prevent defualt
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('form submitted');
  console.log(name.value);
  console.log(password.value);
});
