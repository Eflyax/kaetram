<script setup lang="ts">
import App from './app';
import Game from './game';

const
	startGame = () => {
		const game = new Game(new App());
	}
</script>

<template>
  <div>
		<button
			style="border: 10px solid lime;"
			@click="startGame()"
		>
			Start
		</button>
  </div>
</template>

<style scoped lang="scss">

</style>
