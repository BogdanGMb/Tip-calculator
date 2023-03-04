const intOne = document.querySelector('#inputOne');
const calc = document.querySelector('#calc');
const output = document.querySelector('#output');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  const numOne = parseInt(intOne.value);
  const numTwo = parseInt(calc.value);
  
  const res = numOne * (numTwo / 100);
  output.innerHTML = parseInt(res);
});
