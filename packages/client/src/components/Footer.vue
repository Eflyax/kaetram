<script setup>
import {inject, watchEffect} from 'vue';

const {engine} = inject('engine');

console.log({no_effect: engine.value.player.moving});

</script>

<template>
	<div>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<h1>
			Hola: {{ engine.player.moving }}
		</h1>
	</div>
</template>
