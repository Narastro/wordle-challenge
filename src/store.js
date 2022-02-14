import { derived, writable } from 'svelte/store';
import { today } from './utils/timeUtils';

let storedHistory;
storedHistory = localStorage.getItem('wordleHistory');
if (storedHistory) storedHistory = JSON.parse(storedHistory);
const storedState = localStorage.getItem('wordleState');
const date = localStorage.getItem('wordleDate');
if (date !== today()) localStorage.clear();

export const history = writable(storedHistory || { attempts: 0, answers: {} });
export const preWords = writable(storedState || '');
export const inputWord = writable('');
export const totalWords = derived([preWords, inputWord], ([$preWords, $inputWord]) => $preWords + $inputWord);
export const animationRunning = writable(false);
export const gameOver = writable(false);

history.subscribe(obj => localStorage.setItem('wordleHistory', JSON.stringify(obj)));
preWords.subscribe(str => {
  localStorage.setItem('wordleState', str);
  localStorage.setItem('wordleDate', today());
});
