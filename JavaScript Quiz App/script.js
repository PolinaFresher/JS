  const questions = {
  '1. Inside which HTML element do we put the JavaScript?':
  [[ ' < script > ',' < javascript > ',' < scripting > ',' < js > '], ' < script > '],

  '2. How do you write "Hello World" in an alert box?':
  [[ 'alert("Hello World");','alertBox("Hello World");','msgBox("Hello World");','msg("Hello World");'],'alert("Hello World");'],

  '3. How do you create a function in JavaScript?':
  [[ 'function myFunction()','function:myFunction()','function = myFunction()'],'function myFunction()'],

  '4. How to write an IF statement in JavaScript?':
  [['if (i == 5)','if i = 5 then','if i = 5','if i == 5 then'],'if (i == 5)'],

  '5. How to write an IF statement for executing some code if "i" is NOT equal to 5?':
  [['if (i != 5)','if (i <> 5)','if i <> 5','if i =! 5 then'],'if (i != 5)'],

  '6. How can you add a comment in a JavaScript?':
  [['//This is a comment','  < !--This is a comment-- >  '," 'This is a comment' "],'//This is a comment'],

  '7. Is JavaScript case-sensitive?':
  [['Yes','No'],'Yes'],

  '8. How does a WHILE loop start?':
  [['while i = 1 to 10','while (i <= 10)','while (i <= 10; i++)'],'while (i <= 10)'],

  '9. How does a FOR loop start?':
  [['for (i = 0; i <= 5) ','for (i <= 5; i++)','for (i = 0; i <= 5; i++)','for i = 1 to 5'],'for (i = 0; i <= 5; i++)'],

  "10. Which of the following is used to request and load data Asynchronously?":
  [ ["SQL", "Ajax", "JSON", "Bootstrap"],    "Ajax", ],

  '11. Which Of The Dialog Box Display a Message And a Data Entry Field?' : 
  [['Alert()','Prompt()','Confirm()','Msg()'],'Prompt()'],

  '12. Which of the following events occurs when the user clicks on an HTML element?': 
  [['onchange','onmouseover','onmouseclick','onclick'],'onclick'],

  "13. Which of the following is not an inbuilt array function in JavaScript?": [
  ["filter", "forEach", "map", "set"],
  "set", ],

  "14. You want to store an Array called 'items' to local storage. How will you convert it?": [
  [   "JSON.stringify(items)", "items.indexOf()", "Object.keys(items)","item.toString()", ], "JSON.stringify(items)", ],

  "15. Which property references the DOM object that dispatched an event?": [
  ["self", "object", "target", "source"],"target", ]

  };

  // console.log(Object.values(questions)[0][0][0])

  const keys = Object.keys(questions);
  const values = Object.values(questions);
  
  const question = document.querySelector("#question");
  const correct = document.querySelector("#correct");
  const answers = document.querySelector("#answers");
  const btnStart = document.querySelector(".buttonStart");
  const appName = document.querySelector(".appName");
  const questionsLeft = document.querySelector(".questionsLeft");
  

  btnStart.addEventListener('click', function() {
      startQuiz()
      
    });

  function startQuiz(){
    let quiz = document.querySelector(".quizApp");
    quiz.style.display = "block";
    btnStart.style.display = "none";
    appName.style.display = "none";
    
  }

  let count = -1;
  let score = 0;
  
  
  function init() {
    makeQuestionListeners();
    makeNewQuestions();
  }
  
  window.onload = init;
  
  
  function makeQuestionListeners() {
  

    for (let div of answers.children) {
      div.addEventListener("click", () => {
        console.log(div.textContent)
        console.log(values[count][1])
        makeNewQuestions(div);
      });
    }
  }
 
  function makeNewQuestions(div) {
    questionsLeft.innerHTML = count+2  + "/15"
    
    if (div && div.textContent === values[count][1]) {
      console.log(score)
      console.log( true)
      
      score++;
    }
   

    if (count == keys.length - 1) {
      makeScore();
      return;
    }
    
    count++;
    question.innerHTML = keys[count];
    for (let i = 0; i < values[0][0].length; i++) {
      let answer = values[count][0][i];


      //
      if (answer == undefined){
        answers.children[i].style.display = 'none'
      } else{
        if (answers.children[i].style.display = 'none'){
          answers.children[i].style.display = 'block'
        }

        answers.children[i].innerHTML = values[count][0][i];
      }     
    }
  }

  function endQuiz(){
    let quiz = document.querySelector(".quizApp");
    quiz.style.display = "none";
    btnStart.style.display = "none";
    appName.style.display = "block";
    correct.style.padding = "15% 0 0 0";
    appName.style.padding = "5% 0 0 0";
    correct.style.animation= "correct 2s ease-out";
    
  }
  
  function makeScore() {
     endQuiz()
    correct.innerHTML = `Your score: ${score}/${keys.length}`
    questionsLeft.innerHTML = count+1  
    
  }
