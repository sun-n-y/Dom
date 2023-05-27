//target vs current target

//select all the buttons
const btn = document.querySelectorAll('.btn');

//here we selected list of elements and use current targert to apply styles
btn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green';

    console.log('target', e.target);
    console.log('currenttarget', e.currentTarget);
    e.target.style.color = 'green';
  });
});
