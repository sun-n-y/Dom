//event propagation

//how bubbling allows us to select elements

//select elements
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');

//function reference
function sayHello() {
  console.log('hello there');
}

//event listeners

btn.addEventListener('click', function () {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = 'dynamic heading';
  container.appendChild(element);
});

container.addEventListener('click', function (e) {
  if (event.target.classList.contains('heading')) {
    console.log('hello there');
  }
});

// heading.addEventListener('click', sayHello);
