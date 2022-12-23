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

window.onload = () => {
    let timer = 100;
    let startButton = docuemnt.querySelector('#startButton');
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

let i= 0;
const questionContainer = document.querySelector('#question-container');
questionContainer.classList.remove('hide');
const question= document.querySelector("#question")
question.textContent = questions[i].question;
const optionsContainer = document.querySelector('#options-container');
optionsContainer.innerHTML = '';
for(let j=0; j<4; j++ ){
    const option= document.createElement("input");
    option.textContent(question [i]["option"+(j+1)]);
    questionContainer.appendChild(option);
}
};

const stopTimer = (timerInterval) => {
clearInterval(timerInterval);
};