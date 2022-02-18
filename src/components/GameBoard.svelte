<script>
  import { history, totalWords } from '../store';
  import { ITEM_NUM, WORDS_LEN } from '../constants/settings';

  const gridArr = new Array(ITEM_NUM).fill(0).map((v, i) => i);
</script>

<div class="container">
  {#each gridArr as num (num)}
    <div
      class="grid letter-{num} {$totalWords[num] ? 'on' : ''}
      {parseInt(num / WORDS_LEN) < $history.attempts ? 'checked' : ''} ani-{num % 5}
      {$history.answers[num] && $history.answers[num]}"
    >
      {$totalWords[num] || ''}
    </div>
  {/each}
</div>

<style>
  .container {
    padding: 8px 0;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-rows: repeat(6, 50px);
    grid-template-columns: repeat(5, 50px);
    gap: 5px;
  }
  .grid {
    border: 1px solid var(--color-tone-4);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: medium;
  }
  .on {
    border: 1px solid var(--color-tone-3);
    animation: fadeIn 0.1s;
  }
  .checked.ani-0 {
    animation: rotate 0.3s;
    animation-delay: 0s;
  }
  .checked.ani-1 {
    animation: rotate 0.3s;
    animation-delay: 0.3s;
  }
  .checked.ani-2 {
    animation: rotate 0.3s;
    animation-delay: 0.6s;
  }
  .checked.ani-3 {
    animation: rotate 0.3s;
    animation-delay: 0.9s;
  }
  .checked.ani-4 {
    animation: rotate 0.3s;
    animation-delay: 1.2s;
  }
  .checked.correct {
    background-color: var(--color-correct);
  }
  .checked.present {
    background-color: var(--color-present);
  }
  @keyframes fadeIn {
    from {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg) scale(2);
    }
    30% {
      transform: rotateZ(180deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
</style>
