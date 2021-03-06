const QUIZ = [
    {image: 'https://static.magiquiz.com/wp-content/uploads/2018/05/stark-marvel.jpg',
     question: 'Infinity War centers around the Infinity Stones. How many are on Earth at the beginning of the movie?',
     ans1: "1",
     ans2: "2",
     ans3: "3",
     ans4: "4"
    },

    {image: 'https://cdn3.movieweb.com/i/article/0FAqU0COWKTRmmakoF9Xutm37ZuGWp/798:50/Vision-Thor-3-Guardians-Galaxy-2-Captain-Marvel.jpg',
     question: 'Which of the stones is part of Vision?',
     ans1: "Reality Stone",
     ans2: "Time Stone",
     ans3: "Soul Stone",
     ans4: "Mind Stone"
    },

    {image: 'https://static01.nyt.com/images/2018/04/29/briefing/30avengers-chatter/30Briefing-asia-slide-7SYT-superJumbo.jpg',
    question: 'Which of these is the first Avenger to appear onscreen?',
    ans1: "Starlord",
    ans2: "Iron Man",
    ans3: "Thor",
    ans4: "Hulk"
    },

    {image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f7/Heimdall_Armor_DW.jpg/revision/latest?cb=20131229082119',
    question: 'In the opening sequence, Heimdall is killed. What did he do that prompted this?',
    ans1: "He sent Hulk to Earth",
    ans2: "He killed one of Thanos's children",
    ans3: "He helped Thor escape his bonds",
    ans4: "He saved some of the Asgaardians"
    },

    {image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/24/SoulStone.jpg/revision/latest?cb=20180817153423',
    question: 'Where is the Soul Stone located?',
    ans1: "Knowhere",
    ans2: "Vormir",
    ans3: "Zen-Whoberi",
    ans4: "Nidavellir"
    },

    {image: 'https://i.redd.it/low3gbdsjsr11.jpg',
    question: 'Spider-Man and Starlord bond over which movie?',
    ans1: "Footloose",
    ans2: "Flashdance",
    ans3: "The Breakfast Club",
    ans4: "Friday"
    },

    {image: 'https://pbs.twimg.com/media/Dk-ZXVbU4AEvEU4.jpg',
    question: 'At the end of the movie, how many survivors are alive on Titan?',
    ans1: "1",
    ans2: "2",
    ans3: "3",
    ans4: "4"
    },

    {image: 'https://cdn.images.express.co.uk/img/dynamic/36/590x/Avengers-4-Endgame-spoilers-Infinity-Gauntlet-work-how-does-infinity-stones-snap-thanos-1120063.jpg?r=1556461938744',
    question: 'What color is the Reality Stone',
    ans1: "Yellow",
    ans2: "Red",
    ans3: "Blue",
    ans4: "Green"
    },

    {image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/10/Eitri-Peter-Dinklage-Infinity-War.jpg',
    question: 'What is the name of the smith that Thor visits to rebuild his hammer?',
    ans1: "Eitri",
    ans2: "Ayo",
    ans3: "Okoye",
    ans4: "Corvus"
    },

    {image: 'https://moviepaws.files.wordpress.com/2018/04/rocket-racoon.jpg',
    question: 'What is the Rocket new nickname in the movie?',
    ans1: "Fox",
    ans2: "Trash panda",
    ans3: "Rabbit",
    ans4: "Triangle-faced monkey"
    }
];

const ANSWER = [
  {ans: "2"},
  {ans: "Mind Stone"},
  {ans: "Thor"},
  {ans: "He sent Hulk to Earth"},
  {ans: "Vormir"},
  {ans: "Footloose"},
  {ans: "2"},
  {ans: "Red"},
  {ans: "Eitri"},
  {ans: "Rabbit"}
];

//This counter is use to count the index of QUIZ
let counter = -1;
let questionCounter = 1;
let correctAns = 0;
let result = false;

//this function is use to render the DOM with the each question
function generateQuiz(item) {
    return `<div class="question-box">
    <img src=${item.image} alt="Each Question Picture">
    <legend class="question"><h3>${item.question}</h3></legend><br>
    <div class="button-container">
    <span class=each-question><input type="radio" id="question-1" name="question" value="${item.ans1}" class="button" required>
    <label for="${item.ans1}">${item.ans1}</label></span>
    <br>
    <span class=each-question><input type="radio" id="question-2" name="question" value="${item.ans2}" class="button" >
    <label for="${item.ans2}">${item.ans2}</label></span>
    <br>
    <span class=each-question><input type="radio" id="question-3" name="question" value="${item.ans3}" class="button" >
    <label for="${item.ans3}">${item.ans3}</label></span>
    <br>
    
    <span class=each-question><input type="radio" id="question-4" name="question" value="${item.ans4}" class="button" >
    <label for="${item.ans4}">${item.ans4}</label></span>
    <br>
    </div>
    </div>
    <input class="btn btn-primary" type="submit" value="SUBMIT">
    `;
}

//replace the h1 header with a logo
function addImage() {
  $('header').html(`<img class="header-logo" src="http://pluspng.com/img-png/avengers-logo-png-avengers-age-of-ultron-logo-png-by-sachso74-837.png" alt="Avenger Header Logo">`);
}

//Generate the Quiz
function generateQuizItems(str) {
  const items = str.map(item => generateQuiz(item));
  return items[counter];
}

function renderQuestion() {
    // render the each question in the DOM
  const questionAnswer= generateQuizItems(QUIZ);
  $('.right-answer').hide('.right-answer-box'); 
  $('.question-form').show('.question-box');
  $('.question-form').html(questionAnswer);
}

//Function to start the quiz
function startTheQuiz() {
  $('.gauntlet').click(function(){
    $('h2, h1, .gauntlet').remove();
    counter++;
    renderQuestion();
    addImage();
    updateScore();
  });
} 

//This function use to move to the next question
function moveToNextQuestion () {  
    $('.question-form').submit( function(event) {
      event.preventDefault();
      retrieveAnswer();
      $('.question-form').hide('.question-box');
      $('.right-answer').show('.right-answer-box');   
      displayEachResult();  
      counter++; 
    });
}

//This function is use to render the result to the DOM
function displayEachResult() {
  renderAnswer();
  $('.right-answer').submit( function(event) {
    event.preventDefault();
    renderQuestion();
    updateScore();
  });
}



function rightAnswer() {
  return `<div class="right-answer-box">
  <p>You Guess It Right.</p>
  <img class="result-pic" src="https://data.whicdn.com/images/285820765/original.gif" alt="You Guess It Right Picture">
  <form  action="/index.html">
  <input class="btn btn-primary" type="submit" name="next" value="NEXT QUESTION">
  </form>
  </div>
  `;
}

function wrongAnswer() {
  return `<div class="right-answer-box">
  <p>You Guess It Wrong. The Correct Answer is: <span class="answer">${ANSWER[counter].ans}</span></p>
  <img class="result-pic" src="https://discourse-cdn-sjc1.com/business4/uploads/electroneum/original/2X/2/26df955a47923f27afb50f04fcf2ea5e973c3ffb.gif" alt="You Guess It Wrong Picture">
  <form  action="/index.html">
  <input class="btn btn-primary" type="submit" name="next" value="NEXT QUESTION">
  </form>
  </div>
  `;
}


//Render the right or wrong result depends on the user choice 
function renderAnswer() {
  let eachResult = "";
  if (result) {
    eachResult = rightAnswer();
  } else {
    eachResult = wrongAnswer();
  }
  if (counter === 9) {
    $('.btn:input[type="submit"][name="next"]').val("RESET THE QUIZ");
    $('.right-answer-box > p').append(`<p class="final-score"> Your Final Score is: ${correctAns}`);
    updateScore();
    resetTheQuiz();
  } else {
    $('.right-answer').html(eachResult);
  }
}

//Retrieve the user answer and compare it to the correct answer
function retrieveAnswer() {
   var radioValue = $('input[type=radio][name=question]:checked').val();
   questionCounter++;
   if (radioValue === ANSWER[counter].ans) {
    correctAns++;
    console.log("correct answer " + correctAns);
    result = true;
   } else {
     result = false;
   }
}

//This function is use to update the score board
function updateScore() {
  $('.score-count').html(`Score: ${correctAns}/10`);
  if (questionCounter <=10) {
    $('.question-count').html(`Question: ${questionCounter}/10`);  
  }
}

//Reset the quiz
function resetTheQuiz() {
  $('.right-answer').submit(function(event){
    event.preventDefault();
    location.reload();
  });
}

function handleQuizApp() {
  startTheQuiz();
  moveToNextQuestion();
}

$(handleQuizApp);
