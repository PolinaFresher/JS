let output = document.querySelector(".allBudgetCalc");
let addBudget = document.querySelector(".btnInput");
let addBudgetInput = document.querySelector(".incomeInput");
let budgetLeftOutput = document.querySelector(".budgetLeftCalc");

let left = 0;

let expenseButton = document.querySelector(".btnAddExpenses");
let expenseInput = document.querySelector(".expenseAmount");
let expenseName = document.querySelector(".expenseName");
let expenseCategory = document.querySelector(".categories");

addBudget.addEventListener("click", function () {
  output.innerHTML = addBudgetInput.value;
  budgetLeftOutput.innerHTML = addBudgetInput.value;
  left = addBudgetInput.value;
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

if (localStorage.getItem("expense")) {
  allTasks = JSON.parse(localStorage.getItem("expense"));
  displayExpenses();
}

expenseButton.addEventListener("click", function () {
  let newExpense = {
    expense: expenseName.value,
    amount: expenseInput.value,
    category: expenseCategory.value,
  };
  console.log(newExpense.category);

  if (newExpense.category === "rent") {
    expenseRent.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("rent", JSON.stringify(expenseRent));
    console.log(expenseRent);

  } else if (newExpense.category === "groceries") {
    expenseGroceries.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("groceries", JSON.stringify(expenseGroceries));
    console.log(expenseGroceries);

  } else if (newExpense.category === "entertainment") {
    expenseEntertainment.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("entertainment", JSON.stringify(expenseEntertainment));
    console.log(expenseEntertainment);
    
  } else if (newExpense.category === "medical") {
    expenseMedical.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("medical", JSON.stringify(expenseMedical));
    console.log(expenseMedical);
  } else if (newExpense.category === "utilityBills") {
    expenseUtility.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("utilityBills", JSON.stringify(expenseUtility));
    console.log(expenseUtility);

  } else if (newExpense.category === "phoneBills") {
    expensePhone.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("phoneBills", JSON.stringify(expensePhone));
    console.log(expensePhone);

  } else if (newExpense.category === "internet") {
    expenseTv.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("internet", JSON.stringify(expenseTv));
    console.log(expenseTv);

  } else if (newExpense.category === "clothing") {
    expenseCloth.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("clothing", JSON.stringify(expenseCloth));
    console.log(expenseCloth);

  } else if (newExpense.category === "sport") {
    expenseSport.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("sport", JSON.stringify(expenseSport));
    console.log(expenseSport);
    
  } else if (newExpense.category === "other") {
    expenseOther.push(newExpense);
    displayExpenses(newExpense.category);
    localStorage.setItem("other", JSON.stringify(expenseOther));
    console.log(expenseOther);
  }
});

function displayExpenses(category) {
  let displayExpenses = "";
  if (category === "rent") {
    expenseRent.forEach(function (item, i) {
      displayExpenses += `
        <li>
         <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
        </li>
        `;
      ulRent.innerHTML = displayExpenses;
    });
  } else if (category === "groceries") {
    expenseGroceries.forEach(function (item, i) {
      displayExpenses += `
      <li>
       <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
      </li>
      `;
      ulGroceries.innerHTML = displayExpenses;
    });
  } else if (category === "entertainment") {
    expenseEntertainment.forEach(function (item, i) {
      displayExpenses += `
      <li>
       <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
      </li>
      `;
      ulEntertainment.innerHTML = displayExpenses;
    });
  } else if (category === "medical") {
    expenseMedical.forEach(function (item, i) {
      displayExpenses += `
      <li>
       <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
      </li>
      `;
      ulMedical.innerHTML = displayExpenses;
    });
  } else if (category === "utilityBills") {
    expenseUtility.forEach(function (item, i) {
      displayExpenses += `
      <li>
       <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
      </li>
      `;
      ulUtility.innerHTML = displayExpenses;
    });
  } else if (category === "phoneBills") {
    expensePhone.forEach(function (item, i) {
      displayExpenses += `
      <li>
       <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
      </li>
      `;
      ulPhone.innerHTML = displayExpenses;
    });
  } else if (category === "internet") {
    expenseTv.forEach(function (item, i) {
      displayExpenses += `
    <li>
     <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
    </li>
    `;
      ulTv.innerHTML = displayExpenses;
    });
  } else if (category === "clothing") {
    expenseCloth.forEach(function (item, i) {
      displayExpenses += `
    <li>
     <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
    </li>
    `;
      ulCloth.innerHTML = displayExpenses;
    });
  } else if (category === "sport") {
    expenseSport.forEach(function (item, i) {
      displayExpenses += `
    <li>
     <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
    </li>
    `;
      ulSport.innerHTML = displayExpenses;
    });
  } else if (category === "other") {
    expenseOther.forEach(function (item, i) {
      displayExpenses += `
    <li>
     <label for='item_${i}'>${item.expense} ${item.amount + "$"}</label>
    </li>
    `;
      ulOther.innerHTML = displayExpenses;
    });
  }
  budgetLeftOutput.innerHTML = left - expenseInput.value;
  left = left - expenseInput.value;
  if (left < 0) {
    let err = document.querySelector(".error");
    err.style.display = "block";
    err.innerHTML = "No money left for this month!&#128531;";
  }
}

