//target vs current target ..what is the difference

//select all elements
const btns = document.querySelectorAll('.btn');

// console.log(btns);

//add red color to btn we click on

// for each since we have list of elements
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // //current target
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green';
    //target
    console.log('target', e.target);
    console.log('current target', e.currentTarget);
    e.target.style.color = 'red';
  });
});
