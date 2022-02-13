import { WORDS_LEN } from '../constants/settings';

export const sliceWord = word => word.slice(0, WORDS_LEN);
export const fitWordLength = word => word.length === WORDS_LEN;
