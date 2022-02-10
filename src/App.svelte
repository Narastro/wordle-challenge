<script>
	import "./style.css";
	import Header from "./components/Header.svelte";
	import GameBoard from "./components/GameBoard.svelte";
	import Keyboard from "./components/Keyboard.svelte";
</script>

<div class="nightmode">
	<Header/>
	<GameBoard/>
	<Keyboard/>
</div>

<style>
	div{
		width:var(--width);
	}
	
</style>