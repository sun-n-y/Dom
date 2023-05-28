//event propagation

//target elements
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');

//funciton reference
function sayHello() {
  console.log('hello there');
}

btn.addEventListener('click', function () {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `i am inside the conatiner`;
  container.appendChild(element);
});

container.addEventListener('click', function () {
  if (event.target.classList.contains('heading')) console.log('hello there');
});

//event listener for heading
// heading.addEventListener('click', sayHello);
