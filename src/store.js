import { derived, writable } from 'svelte/store';

let storedHistory;
storedHistory = localStorage.getItem('wordleHistory');
if (storedHistory) storedHistory = JSON.parse(storedHistory);
const storedState = localStorage.getItem('wordleState');

export const history = writable(storedHistory || { attempts: 0, answers: {} });
export const preWords = writable(storedState || '');
export const inputWord = writable('');
export const totalWords = derived([preWords, inputWord], ([$preWords, $inputWord]) => $preWords + $inputWord);
export const animationRunning = writable(false);
export const gameOver = writable(false);

history.subscribe(obj => localStorage.setItem('wordleHistory', JSON.stringify(obj)));
preWords.subscribe(str => localStorage.setItem('wordleState', str));
