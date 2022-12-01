'use strict';

const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');
const randomWord = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population',
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

quoteInputElement.addEventListener('input', () => {
const arrayQuote = quoteDisplayElement.querySelectorAll('span');
const arrayValue = quoteInputElement.value.split('');

let correct = true
arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
        characterSpan.classList.remove('correct');
        characterSpan.classList.remove('incorrect');
        correct = false;
    } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct');
        characterSpan.classList.remove('incorrect');
    } else {
        characterSpan.classList.remove('correct');
        characterSpan.classList.add('incorrect');
        correct = false;
    }
})

if (correct) renderNewWord();
})

function getRandomWord() {
    return fetch(randomWord)
    .then(response => response.json())
    .then(data => data.content);
}

async function renderNewQuote() {
const quote = await getRandomQuote();
quoteDisplayElement.innerHTML = '';
quote.split('').forEach(character => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
})
quoteInputElement.value = null
startTimer()
}

let startTime
function startTimer() {
    timerElement.innerText = 0;
    startTime = new Date();
setInterval(() => {
    timer.innerText = getTimerTime()
}, 1000);
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}

renderNewQuote();