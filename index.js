import './style.css';

// Functional Programming Example
const getNumber = (inputId) => {
  const value = document.getElementById(inputId).value;
  return Math.abs(parseInt(value));
};

const getFunctionalFactorial = (n) => {
  if (n <= 1) return 1;
  else return n * getFunctionalFactorial(n - 1);
};

const displaySum = (value) => {
  document.getElementById('func-sum-result').textContent = value;
};

document.getElementById('func-btn').onclick = () => {
  const res = getFunctionalFactorial(getNumber('input-n'));
  displaySum(res);
};

// Procedural Programming Example
document.getElementById('oo-btn').onclick = () => {
  const value = document.getElementById('input-n').value;
  const n = Math.abs(parseInt(value));
  let res = 1;

  for (let i = 1; i <= n; i++) {
    res = res * i;
  }

  document.getElementById('oo-sum-result').textContent = res;
};
