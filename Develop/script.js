const startTimer = (timer) => {
  const timerInterval = setInterval(() => {
    timer--;
    if (timer == 0) {
      clearInterval(timerInterval);
      displayMessageContainer();
    }
    timerDisplay.textContent = 'Timer: ' + timer;
  }, 1000);
  return timerInterval;
};

const startQuiz = () => {
  mainContent.classList.add('hide');

  questionContainer.classList.remove('hide');
  displayQuestion();
};

const displayQuestion = () => {
  if (i < questions.length) {
    const question = document.querySelector('#question');
    console.log(questions[i].question);
    question.textContent = questions[i].question;
    const optionsContainer = document.querySelector('#optionsContainer');
    optionsContainer.innerHTML = '';
    for (let j = 0; j < 4; j++) {
      const option = document.createElement('input');
      option.setAttribute('type', 'button');
      option.classList.add('btn');
      option.value = questions[i]['option' + (j + 1)];
      optionsContainer.appendChild(option);
      option.addEventListener('click', checkOption);
    }
  } else {
    displayMessageContainer();
  }
};

const checkOption = (event) => {
  const result = document.querySelector('#result');
  result.classList.remove('hide');

  if (event.target.value == questions[i].answer) {
    score++;
    result.textContent = 'Correct!';
  } else {
    result.textContent = 'Wrong!';
  }
  setTimeout(() => {
    result.classList.add('hide');
  }, 1500);
  i++;
  console.log(i);
  displayQuestion();
};

const stopTimer = (timerInterval) => {
  clearInterval(timerInterval);
};

const displayMessageContainer = () => {
  const questionContainer = document.querySelector('#question-container');
  questionContainer.classList.add('hide');

  messageContainer.classList.remove('hide');
  clearInterval(timerInterval);
};

const addToScores = () => {
  let playerName = document.querySelector('#name');
  scores.push({ name: playerName.value, highScore: score });
  messageContainer.classList.add('hide');

  scoresContainer.classList.remove('hide');
  let scoresDisplay = document.querySelector('#scores');
  scoresDisplay.innerHTML = '';

  scores.sort((a, b) => a.score - b.score);
  console.log(scores);
  for (let j = 0; j < scores.length; j++) {
    const res = document.createElement('p');
    res.textContent = scores[j].name + ': ' + scores[j].highScore;
    scoresDisplay.appendChild(res);
  }
};

const restart = () => {
  scoresContainer.classList.add('hide');
  mainContent.classList.remove('hide');
  timer = 100;
  timerDisplay.textContent = 'Timer: ' + timer;
  i = 0;
  score = 0;
};

const questions = [
  {
    question: 'What is HTML?',
    option1: 'Programing language',
    option2: 'Scripting language',
    option3: 'Markup language',
    option4: 'Style Sheet language',
    answer: 'Markup language',
  },
  {
    question: 'What is CSS?',
    option1: 'Programing language',
    option2: 'Scripting language',
    option3: 'Markup language',
    option4: 'Style Sheet language',
    answer: 'Style Sheet language',
  },
  {
    question: 'What is JavaScript?',
    option1: 'Programing language',
    option2: 'Scripting language',
    option3: 'Markup language',
    option4: 'Style Sheet language',
    answer: 'Scripting language',
  },
];

let scores = [];

const scoresContainer = document.querySelector('#scoresContainer');
const messageContainer = document.querySelector('#messageContainer');
const mainContent = document.querySelector('#mainContent');
const questionContainer = document.querySelector('#question-container');
const timerDisplay = document.querySelector('#timer');
let score = 0;
let i = 0;
let timer = 100;
const startButton = document.querySelector('#startButton');
let timerInterval;

const endQuizButton = document.querySelector('#end');

startButton.addEventListener('click', () => {
  timerInterval = startTimer(timer);
  startQuiz(timer);
});
endQuizButton.addEventListener('click', addToScores);

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', restart);
