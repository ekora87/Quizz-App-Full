//this function is use to clear out the current page and rerender the DOM for the new page
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
    ans1: "Foorloose",
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

    {image: 'https://junkee.com/wp-content/uploads/2018/04/aveng.png',
    question: 'What is the name of the smith that Thor visits to rebuild his hammer?',
    ans1: "Eitri",
    ans2: "Ayo",
    ans3: "Okoye",
    ans4: "Corvus"
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
  {ans: "Eitri"}
];

//This counter is use to count the index of QUIZ
let counter = -1;
let correctAns = 0;
function moveToTheNextPage() {

}

//this function is use to render the DOM with the next question
function generateNewQuestion(item) {
    return `<div class="question-box">
    <img src=${item.image}>
    <legend class="question"><h3>${item.question}</h3></legend><br>
    <input type="radio" name="question1" class="button" value="${item.ans1}" required>
    <label for="test">${item.ans1}</label>
    <br>
    <input type="radio" name="question1" value="${item.ans2}" class="button">
    <label for="test">${item.ans2}</label>
    <br>
    <input type="radio" name="question1" value="${item.ans3}" class="button">
    <label for="test">${item.ans3}</label>
    <br>
    <input type="radio" name="question1" value="${item.ans4}" class="button">
    <label for="test">${item.ans4}</label>
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
        //retrieveAnswer();
        if (counter < 10) {
          counter++;
          renderQuestion();
        }
    });
}

// function resetQuestion () {
//   $('.reset-button').submit( function(event) {
//       event.preventDefault();
//       alert("reset");
//       window.location.reload();
//   });
// }

function retrieveAnswer() {
  $('.question-form').submit('input', event => {
   var radioValue = $('input[type=radio][name=question1]:checked').val();
   console.log(radioValue);
   console.log("Answer " +ANSWER[counter].ans);
   if (radioValue === ANSWER[counter].ans) {
    correctAns++;

   }
   console.log(correctAns);
   //alert(radioValue);
           
  });
}


//this function use to check if the answer is correct or not
// function checkAnswer(answer) {
//  console.log(answer.ans);
  
// }



  //console.log("here")


function handleShoppingList() {
  
    startTheQuiz();
    renderQuestion();
    retrieveAnswer();
    //checkAnswer(ANSWER);
    moveToNextQuestion();
    
    
  }

$(handleShoppingList);