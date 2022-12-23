window.onload = () => {
let timer = 100;
let startButton = docuemnt.querySelector('#startButton');
startButton.addEventListener ('click', () => { 
    startQuiz(timer);
})
let timerInterval = startTimer(timer);

const end= document.querySelector("#end")
end.addEventListener('click', () => {
    stopTimer(timerInterval);
})
};

const startQuiz = (timer) => {
    const timerDisplay = document.querySelector('#timer')
    const timerInterval = setInterval(() => { 
        timer --;
        timerDisplay.textContent = 'Timer: ' + timer;
    } 1000);
    return timerInterval;
}
    
const startQuiz = () => {
const mainContent = document.querySelector('#mainContent');
mainContent.classList.add('hide');

const questionContainer = document.querySelector('#question-container');
questionContainer.classList.remove('hide');
};

const stopTimer = (timerInterval) => {
clearInterval(timerInterval);
};