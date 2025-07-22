let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
  document.querySelector('.out-put').innerHTML = calculation;
}

function outPut() {
  calculation = eval(calculation);
  document.querySelector('.out-put').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}

function clearResult() {
  calculation = '';
  document.querySelector('.out-put').innerHTML = calculation;

  localStorage.setItem('calculation', calculation);
}