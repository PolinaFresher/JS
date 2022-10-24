let addBudgetInput = document.querySelector(".incomeInput");
let addBudgetBtn = document.querySelector(".btnInput");
let budgetOutput = document.querySelector(".allBudgetCalc");

let budgetLeftOutput = document.querySelector(".budgetLeftCalc");

let left = 0;
let allExspenses;

let expenseButton = document.querySelector(".btnAddExpenses");
let expenseName = document.querySelector(".expenseName");
let expenseAmount = document.querySelector(".expenseAmount");
let expenseCategory = document.querySelector(".categories");

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

function displayExpenses(object) {
  switch (object.category){
    case "rent" : fillExpence(expenseRent,ulRent);
      break;
    case "groceries": fillExpence(expenseGroceries,ulGroceries);
      break;
    case "entertainment": fillExpence(expenseEntertainment, ulEntertainment);
      break;
    case "medical": fillExpence(expenseMedical,ulMedical);
      break;
    case "utilityBills": fillExpence(expenseUtility,ulUtility)
      break;
    case "phoneBills": fillExpence(expensePhone,ulPhone)
      break;
    case "internet": fillExpence(expenseTv,ulTv)
      break;  
    case "clothing": fillExpence(expenseCloth,ulCloth)
      break;
    case "sport": fillExpence(expenseSport,ulSport)
      break;  
    case "other": fillExpence(expenseOther,ulOther)
      break;
  }
  // if (object.category === "rent") {
  //   fillExpence(expenseRent,ulRent);
  // } else if (object.category === "groceries") {
  //   fillExpence(expenseGroceries,ulGroceries);
  // } else if (object.category === "entertainment") {
  //   fillExpence(expenseEntertainment, ulEntertainment);
  // } else if (object.category === "medical") {
  //   fillExpence(expenseMedical,ulMedical)
  // } else if (object.category === "utilityBills") {
  //   fillExpence(expenseUtility,ulUtility)
  // } else if (object.category === "phoneBills") {
  //   fillExpence(expensePhone,ulPhone);
  // } else if (object.category === "internet") {
  //   fillExpence(expenseTv,ulTv)
  // } else if (object.category === "clothing") {
  //   fillExpence(expenseCloth,ulCloth)
  // } else if (object.category === "sport") {
  //   fillExpence(expenseSport,ulSport)
  // } else if (object.category === "other") {
  //   fillExpence(expenseOther,ulOther);
  // }

  budgetLeftOutput.innerHTML = Number (budgetLeftOutput.innerText) - Number (expenseAmount.value);
  left = left - expenseAmount.value;
  if (left < 0) {
    let err = document.querySelector(".error");
    err.style.display = "block";
    err.innerHTML = "No money left for this month!&#128531;";
  }
}

function fillExpence(array,field){
  let collectExpenses= ""
  array.forEach(function (item, i) {
    console.log("test1")
    collectExpenses += `
      <li>
       <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
      </li>
      `;
      field.innerHTML = collectExpenses;
  });
}
function saveExspenses(expence,category,expenseStorage){
  expenseStorage.push(expence);
  localStorage.setItem(category, JSON.stringify(expenseStorage));
}

//////
function fillExpenceTest(array,field){
  let collectExpenses= ""
  console.log("test1")
  console.log(array)
  array.forEach(function (item, i) {
    console.log("test2")
    collectExpenses += `
      <li>
       <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
      </li>
      `;
      field.innerHTML = collectExpenses;
  });
  console.log("test3")
}



function loadStorage(){
  if (localStorage.getItem("rent")) {
  allExspenses = JSON.parse(localStorage.getItem("rent"));
  console.log(allExspenses)
  allExspenses.forEach (function (item,i) {
    fillExpenceTest(allExspenses[i],ulRent);
  });
}
}

window.addEventListener("load", function() {
  loadStorage();
});

////////




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

  

  // if (newExpense.category === "rent") {
  //   expenseRent.push(newExpense);
  //   displayExpenses(newExpense);
  //   localStorage.setItem("rent", JSON.stringify(expenseRent));

  // } else if (newExpense.category === "groceries") {
  //   expenseGroceries.push(newExpense);
  //   displayExpenses(newExpense);
  //   localStorage.setItem("groceries", JSON.stringify(expenseGroceries));

  // } else if (newExpense.category === "entertainment") {
  //   expenseEntertainment.push(newExpense);
  //   displayExpenses(newExpense);
  //   localStorage.setItem("entertainment", JSON.stringify(expenseEntertainment));
    
  // } else if (newExpense.category === "medical") {
  //   expenseMedical.push(newExpense);
  //   displayExpenses(newExpense);
  //   localStorage.setItem("medical", JSON.stringify(expenseMedical));

  // } else if (newExpense.category === "utilityBills") {
  //   expenseUtility.push(newExpense);
  //   displayExpenses(newExpense);
  //   localStorage.setItem("utilityBills", JSON.stringify(expenseUtility));

  // } else if (newExpense.category === "phoneBills") {
  //   expensePhone.push(newExpense);
  //   displayExpenses(newExpense);
  //   localStorage.setItem("phoneBills", JSON.stringify(expensePhone));

  // } else if (newExpense.category === "internet") {
  //   expenseTv.push(newExpense);
  //   displayExpenses(newExpense);
  //   localStorage.setItem("internet", JSON.stringify(expenseTv));

  // } else if (newExpense.category === "clothing") {
  //   expenseCloth.push(newExpense);
  //   displayExpenses(newExpense);
  //   localStorage.setItem("clothing", JSON.stringify(expenseCloth));

  // } else if (newExpense.category === "sport") {
  //   expenseSport.push(newExpense);
  //   displayExpenses(newExpense);
  //   localStorage.setItem("sport", JSON.stringify(expenseSport));
    
  // } else if (newExpense.category === "other") {
  //   expenseOther.push(newExpense);
  //   localStorage.setItem("other", JSON.stringify(expenseOther));
  //   displayExpenses(newExpense);
  // }
});





