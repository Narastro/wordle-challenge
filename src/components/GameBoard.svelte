<script>
  import { history, inputWords } from '../store';
  import { ITEM_NUM } from '../utils/const';

  const gridArr = new Array(ITEM_NUM).fill(0).map((v, i) => i);
  let totalLetters = $history + $inputWords;
  console.log(gridArr);
</script>

<div class="container">
  {#each gridArr as num}
    <div class="grid letter-{num}">{totalLetters[num] ?? ''}</div>
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
  }
</style>
