let addBudgetInput = document.querySelector(".incomeInput");
let addBudgetBtn = document.querySelector(".btnInput");
let budgetOutput = document.querySelector(".allBudgetCalc");
let budgetLeftOutput = document.querySelector(".budgetLeftCalc");
let expenseButton = document.querySelector(".btnAddExpenses");
let expenseName = document.querySelector(".expenseName");
let expenseAmount = document.querySelector(".expenseAmount");
let expenseCategory = document.querySelector(".categories");
let left = 0;
let allExspenses;
let counter = 0;

addBudgetBtn.addEventListener("click", function () {
  budgetOutput.innerText = Number (addBudgetInput.value) + Number (budgetOutput.innerText)

  if(Number (budgetLeftOutput.innerText)) {
    
    budgetLeftOutput.innerHTML = Number (addBudgetInput.value) + Number (budgetLeftOutput.innerText);
    left = Number (budgetLeftOutput.innerText) + Number (addBudgetInput.value) ;
  }

  else {
    budgetLeftOutput.innerHTML = addBudgetInput.value;
    left = addBudgetInput.value ;
  }
 
});

let expenseRent = [];
let ulRent = document.querySelector(".rentList");

let expenseGroceries = [];
let ulGroceries = document.querySelector(".grList");

let expenseEntertainment = [];
let ulEntertainment = document.querySelector(".entList");

let expenseMedical = [];
let ulMedical = document.querySelector(".medList");

let expenseUtility = [];
let ulUtility = document.querySelector(".wgeList");

let expensePhone = [];
let ulPhone = document.querySelector(".phoneList");

let expenseTv = [];
let ulTv = document.querySelector(".tvList");

let expenseCloth = [];
let ulCloth = document.querySelector(".clothList");

let expenseSport = [];
let ulSport = document.querySelector(".sportList");

let expenseOther = [];
let ulOther = document.querySelector(".otherList");

function displayExpenses(newExpense) {
  switch (newExpense.category){
    case "rent" : fillExpence(ulRent,expenseRent);
      break;
    case "groceries": fillExpence(ulGroceries,expenseGroceries);
      break;
    case "entertainment": fillExpence(ulEntertainment,expenseEntertainment);
      break;
    case "medical": fillExpence(ulMedical,expenseMedical);
      break;
    case "utilityBills": fillExpence(ulUtility,expenseUtility)
      break;
    case "phoneBills": fillExpence(ulPhone,expensePhone)
      break;
    case "internet": fillExpence(ulTv,expenseTv)
      break;  
    case "clothing": fillExpence(ulCloth,expenseCloth)
      break;
    case "sport": fillExpence(ulSport,expenseSport)
      break;  
    case "other": fillExpence(ulOther,expenseOther)
      break;
  }

  budgetLeftOutput.innerHTML = Number (budgetLeftOutput.innerText) - Number (newExpense.amount);
  left = Number (left) - Number (newExpense.amount);
  checkLeftBudget(left)
}

function fillExpence(field,array){
  let collectExpenses = "";
  counter ++
  array.forEach(function (item,i) {
    collectExpenses += `
    <li>
     <label for='item_${i}'>${item.expense + " —"}  ${item.amount + "$"}</label>
    </li>
      `;
    field.innerHTML = collectExpenses;
  });
}

function checkLeftBudget(left){
  let err = document.querySelector(".error");
  if (left < 0) {
    err.style.display = "block";
    err.innerHTML = "No money left for this month!&#128531;";
  }
  else{
    err.style.display = "none";
  }
}
function saveExspenses(expense,category,expenseStorage){
  expenseStorage.push(expense);
  localStorage.setItem(category, JSON.stringify(expenseStorage));
}

expenseButton.addEventListener("click", function () {
  let newExpense = {
    expense: expenseName.value,
    amount: expenseAmount.value,
    category: expenseCategory.value,
  };
  switch (newExpense.category){
    case "rent" : 
      saveExspenses(newExpense,"rent",expenseRent)
      displayExpenses(newExpense);
      break;
    case "groceries" : 
      saveExspenses(newExpense,"groceries",expenseGroceries)
      displayExpenses(newExpense);
      break;
    case "entertainment" : 
      saveExspenses(newExpense,"entertainment",expenseEntertainment)
      displayExpenses(newExpense);
      break;
    case "medical" : 
      saveExspenses(newExpense,"medical",expenseMedical)
      displayExpenses(newExpense);
      break;
    case "utilityBills" : 
      saveExspenses(newExpense,"utilityBills",expenseUtility)
      displayExpenses(newExpense);
      break;
    case "phoneBills" : 
      saveExspenses(newExpense,"phoneBills",expensePhone)
      displayExpenses(newExpense);
      break;
    case "internet" : 
      saveExspenses(newExpense,"internet",expenseTv)
      displayExpenses(newExpense);
      break;
    case "clothing" : 
      saveExspenses(newExpense,"clothing",expenseCloth)
      displayExpenses(newExpense);
      break;
    case "sport" : 
      saveExspenses(newExpense,"sport",expenseSport)
      displayExpenses(newExpense);
      break;
    case "other" : 
      saveExspenses(newExpense,"other",expenseOther)
      displayExpenses(newExpense);
      break;
  }
});





