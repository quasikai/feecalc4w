let op;

const numArray = JSON.parse(localStorage.getItem("array")) || [];

document.getElementById('log-output').innerHTML = numArray.join('<br>')
document.getElementById('log-counter').innerHTML = numArray.length;
document.getElementById('output').innerHTML = numArray[numArray.length - 1] || 0
sum(numArray)

function func() {
  let result;
  let docInput = document.getElementById('num1').value;
  let num1 = Number(docInput.replaceAll(' ', '').replaceAll(' ', ''));
  if (!num1) {
    document.getElementById('output').innerHTML = 'Error!'
    document.getElementById('output-span').innerHTML = ''
    return
  }
  switch (op) {
    case '1%':
      result = Math.floor(num1 - num1 * 0.01);
      break;
    case '2.2%':
      result = Math.floor(num1 - num1 * 0.022);
      break;
    case '-50':
      result = Math.floor(num1 - 50);
      break;
    case '2.5%':
      result = Math.floor(num1 - num1 * 0.025);
      break;
    case '3%':
      result = Math.floor(num1 - num1 * 0.03);
      break;
    case 'add':
      result = num1;
      break;
  }
  numArray.push(result);
  localStorage.setItem('array', JSON.stringify(numArray))
  document.getElementById('output').innerHTML = result;
  document.getElementById('output-span').innerHTML = '$'
  document.getElementById('log-output').innerHTML = numArray.join('<br>');
  document.getElementById('log-counter').innerHTML = numArray.length;
}

document.body.onclick = event => {
  const elem = event.target;
  if (elem.classList.contains('subm-button')) {
    navigator.clipboard.writeText(document.getElementById('output').innerHTML);
  }
  if (elem.classList.contains('summary-output--copy')) {
    navigator.clipboard.writeText(document.getElementById('summary-output').innerHTML);
  }
  if (elem.classList.contains('fee-output--copy')) {
    navigator.clipboard.writeText(document.getElementById('output').innerHTML);
  }
  if (elem.classList.contains('log-count') || elem.classList.contains('log-counter')) {
    navigator.clipboard.writeText(document.getElementById('log-counter').innerHTML);
  }
};

const cleanInput = () => {
  const getInput = document.getElementById('num1');
  getInput.value = '';
};

const cleanOutput = () => {
  const getOutput = document.getElementById('output');
  numArray.length !== 0
    ? (getOutput.innerHTML = numArray[numArray.length - 1])
    : (getOutput.innerHTML = 0);
};

function delLastVal() {
  numArray.pop();
  localStorage.setItem('array', JSON.stringify(numArray))
  document.getElementById('log-output').innerHTML = numArray.join('<br>');
  document.getElementById('log-counter').innerHTML = numArray.length;
}

function sum(x) {
  let s = 0;
  for (i = 0; i < x.length; i++) {
    s += x[i];
  }
  document.getElementById('summary-output').innerHTML = s;
  return s;
}
