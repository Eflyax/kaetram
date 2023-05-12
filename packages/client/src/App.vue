<script setup lang="ts">
import '../scss/main.scss';
import App from './app';
import Game from './game';

const
	deprecatedApp = new App();
	const game = new Game(deprecatedApp);

	deprecatedApp.login()

</script>

<template>
  <div>
		<button
			style="border: 10px solid lime;"
			@click="console.log(game)"
		>
			Start
		</button>
  </div>
</template>

<style scoped lang="scss">

</style>
