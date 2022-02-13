<script>
  import { totalWords } from '../store';
  import { ITEM_NUM } from '../constants/settings';

  const gridArr = new Array(ITEM_NUM).fill(0).map((v, i) => i);
</script>

<div class="container">
  {#each gridArr as num}
    <div class="grid letter-{num} {$totalWords[num] ? 'on' : ''}">
      {$totalWords[num] ?? ''}
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
  @keyframes fadeIn {
    from {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
</style>
