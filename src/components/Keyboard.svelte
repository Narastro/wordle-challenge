<script>
  import { history, inputWord, preWords, animationRunning, gameOver } from '../store';
  import { KEYS } from '../constants/keys';
  import { LACK_WORD_LEN, NOT_EXIST_WORD, CORRECT_ANS, GAME_OVER } from '../constants/messages';
  import { ITEM_NUM, ANIMATION_TIME, WORDS_LEN } from '../constants/settings';
  import { sliceWord, fitWordLength, findExistWord, todayWord } from '../utils/wordUtils';
  import { fromEvent } from 'rxjs';
  import { throttleTime, map, scan } from 'rxjs/operators';

  fromEvent(document.body, 'click')
    .pipe(
      throttleTime(1000),
      map(event => event.clientX),
      scan((count, clientX) => count + clientX, 0)
    )
    .subscribe(count => console.log(count));

  const scoreWord = () => {
    const answer = todayWord();
    const word = $inputWord;
    const OFFSET = $history.attempts * 5;
    for (let i = 0; i < WORDS_LEN; i++) {
      const letter = word[i];
      const isCorrect = answer[i] === letter;
      if (answer.includes(letter))
        history.update(obj => {
          obj.answers[letter] = isCorrect ? 'correct' : obj.answers[letter] ? obj.answers[letter] : 'present';
          obj.answers[OFFSET + i] = isCorrect ? 'correct' : 'present';
          return obj;
        });
    }
  };

  const runAnimation = () => {
    animationRunning.set(true);
    history.update(obj => {
      obj.attempts = obj.attempts + 1;
      return obj;
    });
    setTimeout(() => animationRunning.set(false), ANIMATION_TIME);
  };

  const updateInputWord = key => inputWord.update(word => sliceWord(word + key));

  const storeInputWord = () => {
    preWords.update(words => words + $inputWord);
    inputWord.set('');
  };

  const deleteInputWord = () => inputWord.update(word => word.slice(0, -1));

  const enterInputWords = () => {
    if ($animationRunning || $gameOver) return;
    if (!fitWordLength($inputWord)) return alert(LACK_WORD_LEN);
    if (!findExistWord($inputWord)) return alert(NOT_EXIST_WORD);
    if (todayWord() === $inputWord) {
      alert(CORRECT_ANS);
      gameOver.set(true);
    }
    scoreWord();
    runAnimation();
    storeInputWord();
    if ($preWords.length === ITEM_NUM) return alert(GAME_OVER);
  };

  const onKeydown = e => {
    const { keyCode } = e;
    if ($animationRunning || $gameOver) return;
    else if (keyCode === 8) return deleteInputWord();
    else if (keyCode === 13) return enterInputWords();
    else if (keyCode < 65 || keyCode > 90) return;
    const key = String.fromCharCode(keyCode);
    updateInputWord(key);
  };

  const onClickKey = e => {
    const { key } = e.target.dataset;
    if (!key || $animationRunning || $gameOver) return;
    else if (key === 'BACK') return deleteInputWord();
    else if (key === 'ENTER') return enterInputWords();
    updateInputWord(key);
  };
</script>

<svelte:window on:keydown={onKeydown} />
<div class="container" on:click={onClickKey}>
  {#each KEYS as keysRow, i}
    <div class="grid-row row-{i}">
      {#each keysRow as key}
        <div class="grid-item {$history.answers[key]}" data-key={key}>{key}</div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .container {
    display: grid;
    align-content: flex-end;
    grid-template-rows: repeat(3, 58px);
    gap: 5px;
    padding-bottom: 10px;
  }
  .grid-row {
    display: grid;
    justify-content: center;
    gap: 5px;
  }
  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
    font-weight: bold;
    background-color: var(--key-bg);
    border-radius: 3px;
    color: var(--key-text-color);
    cursor: pointer;
  }
  .row-0 {
    grid-template-columns: repeat(10, 43px);
  }
  .row-1 {
    grid-template-columns: repeat(9, 43px);
  }
  .row-2 {
    grid-template-columns: 65px repeat(7, 43px) 65px;
  }
  .correct {
    background-color: var(--color-correct);
  }
  .present {
    background-color: var(--color-present);
  }
</style>
