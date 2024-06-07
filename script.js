
let userName;

// Add an event listener
const userNameInput = document.getElementById('user-name');
userNameInput.addEventListener('keypress', function(event) {
    // Check if the Enter pressed (key code 13)
    if (event.keyCode === 13) {
        
        event.preventDefault();
       
        userName = userNameInput.value;
       
        initializeQuiz(userName);
        // Clear  input field
        userNameInput.value = '';
        // Hide  form
        nameForm.style.display = 'none';
    }
});

// Add an event listener 
const nameForm = document.getElementById('name-form');
nameForm.addEventListener('submit', function(event) {
   
    event.preventDefault();
  
    userName = userNameInput.value;
   
    initializeQuiz(userName);
   
    userNameInput.value = '';
    
    nameForm.style.display = 'none';
});


function initializeQuiz(userName) {
    
}




// QUESTIONS

const questions = [
  {
    "question": "I have made assumptions about customers of fellow employees that have been proven wrong",
    "answer1": "No",
    "answer1Total": "1",
   
    // add extra thing into here if time...then do an onclick event

    "answer2": "Yes",
    "answer2Total": "2",
    // "answer3": "Afternoon",
    // "answer3Total": "3",
    // "answer4": "Night",
    // "answer4Total": "4"
  },
  {
    "question": "Even if I don't say anything I sometimes judge others by how they look or what they're wearing",
    "answer1": "No",
    "answer1Total": "1",

    "answer2": "Yes",
    "answer2Total": "2",
    // "answer3": "Words of Affirmation",
    // "answer3Total": "3",
    //  "answer4": "Quality time",
    // "answer4Total": "4"
   
    
  },
  {
    "question":
      "I often look or reply to messages on my phone when I am with others.",
      "answer1": "No",
      "answer1Total": "1",
  
      "answer2": "Yes",
      "answer2Total": "2",
    // "answer3": "Winter",
    // "answer3Total": "3",
    // "answer4": "Summer",
    // "answer4Total": "4"

  },
  {
    "question": "I tend to botch foreign names so I just shorten them to make things easier.",
    "answer1": "No",
    "answer1Total": "1",

    "answer2": "Yes",
    "answer2Total": "2",
  //   "answer3":
  //     "Air(Aquarius,Libra,Gemini)",
  //   "answer3Total": "3",
  //   "answer4": "Fire(Aries,Leo,Sagittarius)",
  // "answer4Total": "4"
    
  },
  {
    "question": "I consider myself 'color blind'.",
    "answer1": "No",
    "answer1Total": "1",

    "answer2": "Yes",
    "answer2Total": "2",
    // "answer3": "Snowing",
    // "answer3Total": "3",
    // "answer4": "Sunny",
    // "answer4Total": "4"
  },



  {
    "question": "I get along with everyone-I mean we're all pretty much the same.",
    "answer1": "No",
    "answer1Total": "1",

    "answer2": "Yes",
    "answer2Total": "2",
    // "answer3": "Snowing",
    // "answer3Total": "3",
    // "answer4": "Sunny",
    // "answer4Total": "4"
  },





  {
    "question": "I tell my coworkers from other countries that they speak english very well.",
    "answer1": "No",
    "answer1Total": "1",

    "answer2": "Yes",
    "answer2Total": "2",
    // "answer3": "Snowing",
    // "answer3Total": "3",
    // "answer4": "Sunny",
    // "answer4Total": "4"
  },







  {
    "question": "I have complimented a minority coworker on their intelligence.",
    "answer1": "No",
    "answer1Total": "1",

    "answer2": "Yes",
    "answer2Total": "2",
    // "answer3": "Snowing",
    // "answer3Total": "3",
    // "answer4": "Sunny",
    // "answer4Total": "4"
  },

  {
    "question": "I have commented on someone else's body or appearance to that person or others (including compliments)",
    "answer1": "No",
    "answer1Total": "1",

    "answer2": "Yes",
    "answer2Total": "2",
    // "answer3": "Snowing",
    // "answer3Total": "3",
    // "answer4": "Sunny",
    // "answer4Total": "4"
  },




  {
    "question": "At work I always use the same locker.",
    "answer1": "No",
    "answer1Total": "1",

    "answer2": "Yes",
    "answer2Total": "2",
    // "answer3": "Snowing",
    // "answer3Total": "3",
    // "answer4": "Sunny",
    // "answer4Total": "4"
  },



]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
// const option3 = document.querySelector('.option3');
// const option4 = document.querySelector('.option4');

const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

// question 
function generateQuestions (index) {
    //index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    // const option3Total = questions[index].answer3Total;
    // const option4Total = questions[index].answer4Total;

    //html elements
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    // option3.setAttribute('data-total', `${option3Total}`);
    // option4.setAttribute('data-total', `${option4Total}`);

    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    // option3.innerHTML = `${question.answer3}`
    // option4.innerHTML = `${question.answer4}`

}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    

    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
  
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

  
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);



    //
    currentQuestion++;


        selectedOption.checked = false;

    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Hi ${userName}! Your score is: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
          
            <p> <em> <b> 10-15 </b> </em> <br> Not bad but work to be done </p>
            <p > <em> <b>  16-20 </b>  </em> <br> hmm bestie let's talk about it</p>
          
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//previous question
function loadPreviousQuestion() {
    // quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

// reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}






generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
