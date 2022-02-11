<script></script>

<div class="container">
  <div class="grid-row row-1">
    <div class="grid-item" data-key="q">Q</div>
    <div class="grid-item" data-key="w">W</div>
    <div class="grid-item" data-key="e">E</div>
    <div class="grid-item" data-key="r">R</div>
    <div class="grid-item" data-key="t">T</div>
    <div class="grid-item" data-key="y">Y</div>
    <div class="grid-item" data-key="u">U</div>
    <div class="grid-item" data-key="i">I</div>
    <div class="grid-item" data-key="o">O</div>
    <div class="grid-item" data-key="p">P</div>
  </div>
  <div class="grid-row row-2">
    <div class="grid-item" data-key="a">A</div>
    <div class="grid-item" data-key="s">S</div>
    <div class="grid-item" data-key="d">D</div>
    <div class="grid-item" data-key="f">F</div>
    <div class="grid-item" data-key="g">G</div>
    <div class="grid-item" data-key="h">H</div>
    <div class="grid-item" data-key="j">J</div>
    <div class="grid-item" data-key="k">K</div>
    <div class="grid-item" data-key="l">L</div>
  </div>
  <div class="grid-row row-3">
    <div class="grid-item" data-key="enter">ENTER</div>
    <div class="grid-item" data-key="z">Z</div>
    <div class="grid-item" data-key="x">X</div>
    <div class="grid-item" data-key="c">C</div>
    <div class="grid-item" data-key="v">V</div>
    <div class="grid-item" data-key="b">B</div>
    <div class="grid-item" data-key="n">N</div>
    <div class="grid-item" data-key="m">M</div>
    <div class="grid-item" data-key="back">BACK</div>
  </div>
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
  .row-1 {
    grid-template-columns: repeat(10, 43px);
  }
  .row-2 {
    grid-template-columns: repeat(9, 43px);
  }
  .row-3 {
    grid-template-columns: 65px repeat(7, 43px) 65px;
  }
</style>
