//events

//select btn element, so we can listen for clicks
const btn = document.querySelector('.btn');
// now we have our node object btn

const heading = document.querySelector('h2');

//function reference approach
//set up logic to add or remove class from heading
function changeColors() {
  if (heading.classList.contains('red')) heading.classList.remove('red');
  else {
    heading.classList.add('red');
  }
}

//add event listenser to node object btn
//function reference approach
btn.addEventListener('click', changeColors);
