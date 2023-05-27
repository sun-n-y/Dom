//events

//select btn element, so we can listen for clicks
const btn = document.querySelector('.btn');
// now we have our node object btn

const heading = document.querySelector('h2');

//add event listenser to node object btn
btn.addEventListener('click', function () {
  heading.classList.add('red');
});
