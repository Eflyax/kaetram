<script setup>
import {Events} from '@/types/Events';
import {NButton, NProgress} from 'naive-ui';
import {onMounted} from 'vue';
import {ref} from 'vue';
import bus from '@/lib/bus';

const
	positionX = ref(0),
	positionY = ref(0);

onMounted(() => {
	bus.$on(Events.SET_PLAYER_POSITION, (position) => {
		positionX.value = position.x;
		positionY.value = position.y;
	});
});
</script>

<template>
	<div class="footer">
		<p>x: {{ positionX }}, y: {{ positionY }}</p>
	</div>
</template>

<style lang="scss">
.footer {
	background-color: gray;
	border: 0;
	bottom: 0;
	color: wheat;
	height: 100px;
	left: 0;
	margin-left: 0;
	padding: 0;
	position: absolute;
	width: 100%;
	z-index: 10;
}
</style>
