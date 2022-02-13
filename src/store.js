import { derived, writable } from 'svelte/store';

export const history = writable({ attempts: 0, answers: new Map() });
export const preWords = writable('');
export const inputWord = writable('');
export const totalWords = derived([preWords, inputWord], ([$preWords, $inputWord]) => $preWords + $inputWord);
export const animationRunning = writable(false);
export const gameOver = writable(false);
