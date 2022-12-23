

const startTimer = (timer) => {
    const timerDisplay = document.querySelector('#timer')
    const timerInterval = setInterval(() => { 
        timer --;
        timerDisplay.textContent = 'Timer: ' + timer;
    }, 1000);
    return timerInterval;
}
    
const startQuiz = () => {
mainContent.classList.add('hide');

const questionContainer = document.querySelector('#question-container');
questionContainer.classList.remove('hide');
displayQuestion ();
};

const displayQuestion = () => {
const question = document.querySelector("#question")
console.log(questions[i].question);
question.textContent = questions[i].question;
const optionsContainer = document.querySelector('#optionsContainer');
optionsContainer.innerHTML = '';
for (let j = 0; j < 4; j++ ) {
    const option= document.createElement('input');
    option.setAttribute('type', 'button');
    option.value = questions[i]['option' + (j + 1)];
    optionsContainer.appendChild(option);
    option.addEventListener('click', checkOption);
}
};

const checkOption = (event) => {
   const result = document.querySelector("#result");
   result.classList.remove('hide');
   if (i < questions.length) {
    if (event.target.value== questions [i].answer) {
        score++;
        result.textContent= "Correct!";
    } else {
        result.textContent="Wrong!";
    }
    setTimeout(() => { 
    result.classList.add('hide');        
    }, 1500);
    i++;
    console.log(i);
    displayQuestion();
} else{
    const questionContainer = document.querySelector('#question-container');
    questionContainer.classList.remove('hide');

    messageContainer.classList.remove('hide');
    clearInterval(timerInterval);
}
};

const stopTimer = (timerInterval) => {
clearInterval(timerInterval);
};

const addToScores = () => {
let playerName = document.querySelector('#name');
scores.push({name: playerName, highScore: score});
messageContainer.classList.add("hide");
scoresContainer.classList.remove('hide');
let scoresDisplay= document.querySelector("scores");
scoresDisplay.innerHTML = '';

scores.sort((a, b) => a.score - b.score)
for (let j = 0; j < scores.length; j++) {
const res = document.createElement('p');
res.textContent = scores[i].playerName + ': ' + scores[i].score;
}
};

const restart = () => {
    scoresContainer.classList.add('hide');
    mainContent.classList.remove('hide')
    timer = 100;
}

const questions = [
    {
    question: 'What is HTML?',
    option1: 'Programing language',
    option2: 'Scripting language',
    option3: 'Style sheet language',
    option4: 'Markup language',
    answer: 'Markup language',
    },
    {
    question: 'What is CSS?',
    option1: 'Programing language',
    option2: 'Scripting language',
    option3: 'Markup language',
    option4: 'Style sheet language',
    answer: 'Style sheet language', 
    },
];

let scores = []

let scoresContainer = document.querySelector('#scoresContainer');
const messageContainer = document.querySelector('#messageContainer');
const mainContent = document.querySelector('#mainContent');

let score = 0;
let i = 0;
let timer = 100;
let startButton = document.querySelector('#startButton');
let timerInterval;

let endQuizButton= document.querySelector("#end")

startButton.addEventListener ('click', () => { 
    timerInterval = startTimer(timer);
    startQuiz(timer);
});
endQuizButton.addEventListener('click', addToScores);