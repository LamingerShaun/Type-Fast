'use strict';

const startGame = document.getElementById('button');
const stats = document.getElementById('stats');
const input = document.getElementById('input');
const textDisplay = document.getElementById('text-display');
const form = document.getElementById('form');
const mainContent = document.getElementById('main-content');
const timeDisplay = document.getElementById('time-display');
const wpmDisplay = document.getElementById('wpm-display');
const scoreDisplay = document.getElementById('score-display');
const randomWords = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population',
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute',
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle',
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy',
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future',
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency',
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician',
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution',
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music',
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework',
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery',
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow',
'keyboard', 'window'];

const state = {
    currentWord: '',
    score: 0,
    timeElapsed: 0,
    gameLength: 99
};

function createWordSpan(color, content) {
    const span = document.createElement('span');
    const style = 'background-color: ' + color;
    span.setAttribute('style', style);
    span.setAttribute('class', 'typed-word');

    span.textContent = content;
    return span;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = input.value;
    if (userInput === ''){
        return;
    }
    const isCorrect = userInput === state.currentWord;
    let span;
    if (isCorrect) {
        span = createWordSpan('greenyellow', userInput);
        state.score =+ 1;
    } else {
        span = createWordSpan('red', userInput);
    }

    mainContent.appendChild(span);
    input.value = '';
    nextWord();
    renderStats();
});


function getRandomWord() {
    return randomWords[Math.floor(Math.random() * randomWords.length)]
}

function nextWord() {
    const word = getRandomWord();
    textDisplay.textContent = word;
    state.currentWord = word;
}

function renderStats() {
    timeDisplay.textContent = state.gameLength - state.timeElapsed;
    scoreDisplay.textContent = state.score;
    wpmDisplay.textContent = (state.score / (state.timeElapsed / 60)).toFixed(2);
}

function startClock() {
    setInterval(function(){
        state.timeElapsed += 1;
        renderStats();
        if (timeElapsed === state.gameLength) {
            alert("Game over, WPM is: " + wpmDisplay.textContent);
            window.location.reload();
        }
    });
}

startGame.addEventListener('click', function(event) {
    event.preventDefault;
    startGame.className= 'hide';
    stats.className = '';
    input.className = '';
    input.focus();
    nextWord();
    startClock();
    PlaySound = function () {
        let audio = new Audio('./assets/media/Fine Seeds - Thomas Gresen Royalty Free Music No Copyright Free Background Music Free Download.mp3');
        audio.loop = false;
        audio.play(); 
    }
}, 100);