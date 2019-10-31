//query select the input fields to gether data
const budgetInput = document.querySelector('#budgetAmount');
const expenseTitleInput = document.querySelector('#expenseType');
const expenseValueInput = document.querySelector('#expenseAmount');

//query select the buttons to trigger events
const calculateBtn = document.querySelector('#calculate');
const addExpenseBtn = document.querySelector('#addExpense');

//query select the data to display the results
const expensesList = document.querySelector('.expenseCollection');
let budgetValueDisplay = document.querySelector('#budgetValue');
let balanceValueDisplay = document.querySelector('#balanceValue');

//our running total for our budget
let totalFunds = 0;

let itemId = 0;

loadEventListeners();

function loadEventListeners() {
  calculateBtn.addEventListener('click', createBudget);
  addExpenseBtn.addEventListener('click', addExpense);
}

function createBudget(event) {
  totalFunds = budgetInput.value;
  budgetValueDisplay.innerText = totalFunds;
  event.preventDefault();
}

function addExpense(event) {
  let expense = {
    id: itemId,
    title: expenseTitleInput.value,
    amount: expenseValueInput.value
  };

  totalFunds -= expense.amount;
  console.log(totalFunds);

  const expenseLi = document.createElement('li');
  expenseLi.className = 'expenseLi';
  expenseLi.innerHTML = `
  <p>${expense.title}</p>
  <p>:</p>
  <p id= ${expense.id}>${expense.amount}</p>
  `;

  const removeButton = document.createElement('a');
  removeButton.className = 'fa fa-trash';
  expenseLi.appendChild(removeButton);
  expensesList.appendChild(expenseLi);

  removeButton.addEventListener('click', () => {
    const amtToAdd = document.getElementById(expense.id).innerText;
    const amtToAddValue = parseInt(amtToAdd);
    totalFunds += amtToAddValue;
    expensesList.removeChild(expenseLi);
    balanceValueDisplay.innerText = totalFunds;
  });

  balanceValueDisplay.innerText = totalFunds;

  itemId++;
  expenseTitleInput.value = '';
  expenseValueInput.value = '';
  event.preventDefault();
}