<script setup>
import {Events} from '@/types/Events';
import {onMounted} from 'vue';
import {ref} from 'vue';
import bus from '@/lib/bus';

const
	positionX = ref(0),
	positionY = ref(0),
	hpValue = ref(0),
	hpMaximum = ref(0);

onMounted(() => {
	bus.$on(Events.SET_PLAYER_POSITION, (position) => {
		positionX.value = position.x;
		positionY.value = position.y;
	});
	bus.$on(Events.SET_PLAYER_HP, (newState) => {
		hpValue.value = newState.value;
		hpMaximum.value = newState.maximum;
	});
});
</script>

<template>
	<div class="footer">
		<h1>
			<p>Position:</p>
			x: {{ positionX }}<br>
			y: {{ positionY }}<br>
			HP: ({{  hpValue }}/{{  hpMaximum }})
		</h1>

	</div>
</template>

<style lang="scss">
.footer {
	position: absolute;
	bottom: 0;
	widows: 100%;
	height: 100px;
	background-color: black;
	color: wheat;
}
</style>
