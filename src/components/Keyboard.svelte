<script>
  import { inputWord, preWords } from '../store';
  import { KEYS } from '../constants/keys';
  import { LACK_WORD_LEN, NOT_EXIST_WORD } from '../constants/messages';
  import { sliceWord, fitWordLength, findExistWord, todayWord } from '../utils/wordUtils';

  const updateInputWord = key => inputWord.update(word => sliceWord(word + key));

  const storeInputWord = () => {
    preWords.update(words => words + $inputWord);
    inputWord.set('');
  };

  const deleteInputWord = () => inputWord.update(word => word.slice(0, -1));

  const enterInputWords = () => {
    if (!fitWordLength($inputWord)) return alert(LACK_WORD_LEN);
    if (!findExistWord($inputWord)) return alert(NOT_EXIST_WORD);
    storeInputWord();
  };

  const onKeydown = e => {
    const { keyCode } = e;
    if (keyCode === 8) return deleteInputWord();
    else if (keyCode === 13) return enterInputWords();
    else if (keyCode < 65 || keyCode > 90) return;
    const key = String.fromCharCode(keyCode);
    updateInputWord(key);
  };

  const onClickKey = e => {
    const { key } = e.target.dataset;
    if (!key) return;
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
        <div class="grid-item" data-key={key}>{key}</div>
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
</style>
