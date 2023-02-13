'use strict';

const breakMinusElement = document.querySelector('#break-minus-element');
const breakSessionElement = document.querySelector('#break-session-element');
const breakPlusElement = document.querySelector('#break-plus-element');
const sessionMinusElement = document.querySelector('#session-minus-element');
const sessionElement = document.querySelector('#session-element');
const sessionPlusElement = document.querySelector('#session-plus-element');
const timerMinutes = document.querySelector('#timer-mimutes');
const timerSeconds = document.querySelector('#timer-seconds');
const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-seconds');
const resetButton = document.querySelector('#reset-seconds');

let isSessionMode = true;
let breakSessionLength = 5 * 60;
let sessionLength = 25 * 60;

breakMinusElement.addEventListener('click', () => {
    breakSessionLength -= 60;
    breakSessionElement.textContent = breakSessionLength / 60;
});

breakPlusElement.addEventListener('click', () => {
    breakSessionLength += 60;
    breakSessionElement.textContent = breakSessionLength / 60;
});

sessionMinusElement.addEventListener('click', () => {
    sessionLength -= 60;
    sessionElement.textContent = sessionLength / 60;
    if (isSessionMode) {
        timerMinutes.textContent = sessionLength / 60;
    }
});

sessionPlusElement.addEventListener('click', () => {
    sessionLength += 60;
    sessionElement.textContent = sessionLength / 60;
    if (isSessionMode) {
        timerMinutes.textContent = sessionLength / 60;
    }
});
