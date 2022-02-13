<script>
  import './style.css';
  import Header from './components/Header.svelte';
  import GameBoard from './components/GameBoard.svelte';
  import Keyboard from './components/Keyboard.svelte';
</script>

<div id="app" class="nightmode">
  <div class="container">
    <Header />
    <GameBoard />
    <Keyboard />
  </div>
</div>

<style>
  #app {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .container {
    width: var(--width);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
