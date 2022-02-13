import { WORDS_LEN } from '../constants/settings';
import { WORDS_LIST } from '../constants/wordsList';

const wordsMap = new Map();
WORDS_LIST.forEach(word => wordsMap.set(word.toUpperCase(), false));

const hashing = date => date % WORDS_LIST.length;

export const todayWord = () => {
  const milisecToDay = 1000 * 60 * 60 * 24;
  const today = Math.floor(Date.now() / milisecToDay);
  const index = hashing(today);
  return WORDS_LIST[index].toUpperCase();
};

export const sliceWord = word => word.slice(0, WORDS_LEN);
export const fitWordLength = word => word.length === WORDS_LEN;
export const findExistWord = word => wordsMap.has(word);
