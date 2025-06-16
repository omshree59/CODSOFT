const display = document.getElementById('display');
const buttonsContainer = document.getElementById('buttons');
let expression = '';

// Layout of the calculator buttons
const buttonLayout = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', 'C', '=', '+'
];

// Generate buttons dynamically
for (let btn of buttonLayout) {
  const button = document.createElement('button');
  button.textContent = btn;

  if (!isNaN(btn)) {
    button.onclick = () => appendNumber(btn);
  } else if (['+', '-', '*', '/'].includes(btn)) {
    button.onclick = () => appendOperator(btn);
  } else if (btn === '=') {
    button.onclick = calculate;
  } else if (btn === 'C') {
    button.classList.add('clear');
    button.onclick = clearDisplay;
  }

  buttonsContainer.appendChild(button);
}

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
  } catch {
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
