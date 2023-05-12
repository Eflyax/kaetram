<script setup>
import {onMounted} from 'vue';
import {ref} from 'vue';
import bus from './../lib/bus';

const
	positionX = ref(0),
	positionY = ref(0);

onMounted(() => {
	bus.$on('SET_PLAYER_POSITION', (position) => {
		positionX.value = position.x;
		positionY.value = position.y;
	});
});
</script>

<template>
	<div class="footer">
		<h1>
			<p>Position:</p>
			x: {{ positionX }}<br>
			y: {{ positionY }}<br>
		</h1>
	</div>
</template>

<style lang="scss">
.footer {
	position: absolute;
	bottom: 0;
	widows: 100%;
	height: 50px;
	background-color: black;
	color: wheat;
}
</style>
