//this function is use to clear out the current page and rerender the DOM for the new page
const QUIZ = [
    {question: 'Infinity War centers around the Infinity Stones. How many are on Earth at the beginning of the movie?',
     ans1: 1,
     ans2: 2,
     ans3: 3,
     ans4: 4
    },

    {question: 'Which of the stones is part of Vision?',
     ans1: "Reality Stone",
     ans2: "Time Stone",
     ans3: "Soul Stone",
     ans4: "Mind Stone"
    },

    {question: 'Which of these is the first Avenger to appear onscreen?',
    ans1: "Starlord",
    ans2: "Iron Man",
    ans3: "Thor",
    ans4: "Hulk"
    },

    {question: 'In the opening sequence, Heimdall is killed. What did he do that prompted this?',
    ans1: "He sent Hulk to Earth",
    ans2: "He killed one of Thanos's children",
    ans3: "He helped Thor escape his bonds",
    ans4: "He saved some of the Asgaardians"
    },

    {question: 'Where is the Soul Stone located?',
    ans1: "Knowhere",
    ans2: "Vormir",
    ans3: "Zen-Whoberi",
    ans4: "Nidavellir"
    },

    {question: 'Spider-Man and Starlord bond over which movie?',
    ans1: "Foorloose",
    ans2: "Flashdance",
    ans3: "The Breakfast Club",
    ans4: "Friday"
    },

    {question: 'At the end of the movie, how many survivors are alive on Titan?',
    ans1: "1",
    ans2: "2",
    ans3: "3",
    ans4: "4"
    },

    {question: 'What color is the Time Stone',
    ans1: "Yellow",
    ans2: "Red",
    ans3: "Blue",
    ans4: "Green"
    },

    {question: 'Which character was strangled to death early in the movie by Thanos himself?',
    ans1: "Hulk",
    ans2: "Gamora",
    ans3: "Heimdall",
    ans4: "Loki"
    }
];

//This counter is use to count the index of QUIZ
let counter = -1;
function moveToTheNextPage() {

}

//this function is use to render the DOM with the next question
function generateNewQuestion(item) {
    return `<div class="question-box">
    <legend class="question"><h3>${item.question}</h3></legend><br>
    <input type="radio" name="question1" class="button" required>
    <label for="question1">${item.ans1}</label>
    <br>
    <input type="radio" name="question1" class="button" required>
    <label for="question1">${item.ans2}</label>
    <br>
    <input type="radio" name="question1" class="button">
    <label for="question1">${item.ans3}</label>
    <br>
    <input type="radio" name="question1" class="button">
    <label for="question1">${item.ans4}</label>
    <br>
    </div>
    <input type="submit" class="next-button">
    `;
}

function generateQuestionString(str) {
    
  
    const items = str.map((item) => generateNewQuestion(item));
    
    return items[counter];
  }

function renderQuestion() {
    // render the shopping list in the DOM
    
    const questionAnswer= generateQuestionString(QUIZ);
  
    // insert that HTML into the DOM
    $('.question-form').html(questionAnswer);
  }

function startTheQuiz() {
  $('.start-button').click(function(){
    counter++;
    renderQuestion();
    $('.start-button').remove();
    $('h2').remove();
  });
} 

//This function use to remove the question
function moveToNextQuestion () {
    $('.question-form').submit( function(event) {
        event.preventDefault();
        
        if (counter < 10) {
          counter++;
          renderQuestion();
        }
    });
}

function resetQuestion () {
  $('.reset-button').submit( function(event) {
      event.preventDefault();
      alert("reset");
      window.location.reload();
  });
}
//this function use to check if the answer is correct or not
function checkAnswer() {

}

function renderTheDom() {

}

function handleShoppingList() {
  resetQuestion();
    startTheQuiz();
    renderQuestion();
    moveToNextQuestion();
    
    
  }

$(handleShoppingList);