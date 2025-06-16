const display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
  expression += num;
  display.value = expression;
}

function appendOperator(op) {
  if (expression === '') return;
  const lastChar = expression.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    expression = expression.slice(0, -1) + op;
  } else {
    expression += op;
  }
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (e) {
    display.value = 'Error';
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
