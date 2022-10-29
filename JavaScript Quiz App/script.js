const questions = {
  '1. Inside which HTML element do we put the JavaScript?':
  [[ ' < script > ',' < javascript > ',' < scripting > ',' < js > '], '< script >'],

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

  const keys = Object.keys(questions);
  const values = Object.values(questions);
  const correct = document.querySelector("#correct");
  const btnStart = document.querySelector(".buttonStart");
  const appName = document.querySelector(".appName");
  const quiz = document.querySelector(".quizApp");
  
  let count = 0;
  let score = 0;

  btnStart.addEventListener('click', function() {
      startQuiz()
    });

  function startQuiz(){
    quiz.style.display = "block";
    appName.style.display = "none";
    btnStart.style.display= "none";
    addQuestion()
    addAnswers()
    addQustionCounter()
    changeQuestion();
  }
  function changeQuestion() {
    const answers = document.querySelector("#answers");
    for (let div of answers.children) {
      div.addEventListener("click", function (event){
        if (event.target.innerText === values[count][1]) {
          score++;
        }
        count++;
        makeNewQuestions();
      });
    }
  }
 
  function makeNewQuestions() {
    document.querySelector("#question").remove();
    document.querySelector("#answers").remove();
    if (count == keys.length) {
      makeScore();
      return;
    }
    addQuestion()
    addAnswers()
    addQustionCounter()
    changeQuestion()
  }

  function addQustionCounter(){
    const questionCounter = document.createElement('div');
    questionCounter.innerText = count + 1 + "/15";
    questionCounter.className = "questionsLeft";
    const answers = document.querySelector("#answers");
    answers.append(questionCounter);
  }

  function addQuestion(){
    const question = document.createElement('div');
    question.innerText = keys[count];
    question.className = "question"
    question.id = 'question';
    quiz.append(question);
  }

  function addAnswers(){
    const answerList = document.createElement('div');
    answerList.className = "answers"
    answerList.id = 'answers';
    quiz.append(answerList);
    const answers = document.querySelector("#answers");
    values[count][0].forEach((element) =>{
      const answer = document.createElement('div');
      answer.className = "answer"
      answer.innerText = element;
      answers.append(answer); 
    })
  }

  function endQuiz(){
    document.querySelector(".questionsLeft").style.display = "none";
    document.querySelector(".quizApp").style.display = "none";
    appName.style.display = "block";
    correct.style.padding = "15% 0 0 0";
    appName.style.padding = "5% 0 0 0";
    correct.style.animation= "correct 2s ease-out";
  }
  
  function makeScore() {
    endQuiz()
    correct.innerHTML = `Your score: ${score}/${keys.length}` 
  }
