//event object

//select heading and button
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

//event listener
heading.addEventListener('click', function (event) {
  console.log(event.currentTarget);
});

//another way to  target element
btn.addEventListener('click', function (event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type);
});

//prevent default behavior of link

const link = document.querySelector('#link');

function prevent(event) {
  event.preventDefault();
}

link.addEventListener('click', prevent);

//this keyowrd
heading.addEventListener('click', function (event) {
  // console.log(event.currentTarget);
  console.log(this);
});
