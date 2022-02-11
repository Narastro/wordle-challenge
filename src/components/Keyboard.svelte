<script>
  import { keys } from '../utils/const';
</script>

<div class="container">
  {#each keys as keysRow, i}
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
