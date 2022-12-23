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

let score = 0;
let i = 0;
window.onload = () => {
    let timer = 100;
    let startButton = document.querySelector('#startButton');
    let timerInterval;
    startButton.addEventListener ('click', () => { 
        timerInterval - startTimer(timer)
        startQuiz(timer);
});

const end = document.querySelector("#end")
end.addEventListener('click', () => {
    stopTimer(timerInterval);
})
};

const startTimer = (timer) => {
    const timerDisplay = document.querySelector('#timer')
    const timerInterval = setInterval(() => { 
        timer --;
        timerDisplay.textContent = 'Timer: ' + timer;
    }, 1000);
    return timerInterval;
}
    
const startQuiz = () => {
const mainContent = document.querySelector('#mainContent');
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
    option.addEventListener('click', (event)=>checkOption(event,i))
}
}

const checkOption = (event, i) => {
   const result= document.querySelector("#result");
   if (i<questions.length) {
    if (event.target.value== questions [i].answer){
        score++;
        result.textContent= "Correct!"
    } else {
        result.textContent="Wrong!";
    }
    i++;
    displayQuestion();
}
else{
    const questionContainer = document.querySelector('#question-container');
    questionContainer.classList.remove('hide');
    const messageContainer = document.querySelector('#messageContainer');
    messageContainer.classList.remove('hide');
    
    }

};

const stopTimer = (timerInterval) => {
clearInterval(timerInterval);
};