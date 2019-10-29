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
let balanceValueDisplay = document.querySelector("#balanceValue");

//our running total for our budget
let totalFunds = 0;

let itemId = 0;

loadEventListeners();

function loadEventListeners() {
  //add a click event listener for the calculate button that triggers a createBudget function
  calculateBtn.addEventListener('click', createBudget);
  //add a click event listener for the add expense button that triggers an addExpense function
  addExpenseBtn.addEventListener('click', addExpense);
}

function createBudget(event) {
  totalFunds = budgetInput.value;
  budgetValueDisplay.innerText = totalFunds;
  event.preventDefault();
}

function addExpense(event) {
const expense = {
id: itemId,
name: expenseTitleInput.value,
amount: expenseValueInput.value
};
console.log(expense);

  //dynamically create the list and take away from the budget
  const expenseLi = document.createElement('li')
  expenseLi.className = "expenseLi";
  expenseLi.innerHTML = `
  <p>${expense.title}</p>
  <p>:</p>
  <p>${expense.amount}</p>
  `
expensesList.appendChild(expenseLi)

balanceValueDisplay.innerText = totalFunds -= expense.amount;
  //create a remove button and once an item is deleted from the list it is added back to the budget
  
  
  itemId++;
  expenseTitleInput.value = '';
  expenseValueInput.value = '';
  event.preventDefault();
}
