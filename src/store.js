import { writable } from 'svelte/store';

export const attempts = writable(0);
export const inputWords = writable('');
export const history = writable({});
