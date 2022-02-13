import { derived, writable } from 'svelte/store';

export const preWords = writable('');
export const inputWord = writable('');
export const totalWords = derived([preWords, inputWord], ([$preWords, $inputWord]) => $preWords + $inputWord);
