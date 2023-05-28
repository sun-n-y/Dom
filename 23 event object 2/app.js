//event object

//use event object to prevent default behavior of link

//select elements
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

//event listeners using event object to select element
heading.addEventListener('click', function (event) {
  console.log(event.currentTarget.parentElement);
  console.log(this);
});

btn.addEventListener('click', function (event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type);
  console.log(event);
});

//default behavior
link.addEventListener('click', function (event) {
  console.log(event);
  event.preventDefault();
});
