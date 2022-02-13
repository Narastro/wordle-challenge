import { derived, writable } from 'svelte/store';

export const inputWord = writable('');
export const preWords = writable('');
export const totalWords = derived(
  [inputWord, preWords],
  ([$inputWord, $preWords]) => $inputWord + $preWords
);
