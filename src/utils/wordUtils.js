import { WORDS_LEN } from '../constants/settings';
import { WORDS_LIST } from '../constants/wordsList';

const wordsMap = new Map();
WORDS_LIST.forEach(word => wordsMap.set(word, false));

export const sliceWord = word => word.slice(0, WORDS_LEN);
export const fitWordLength = word => word.length === WORDS_LEN;
export const findExistWord = word => wordsMap.has(word);
