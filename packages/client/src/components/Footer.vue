<script setup>
import {Events} from '@/types/Events';
import {NProgress} from 'naive-ui';
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
		<n-progress
			type="line"
			status="error"
			:percentage="hpValue / (hpMaximum / 100)"
			:height="24"
			processing
			border-radius="12px 0 12px 0"
			fill-border-radius="12px 0 12px 0"
		>
		({{  hpValue }} / {{  hpMaximum }})
		</n-progress>
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
	width: 50%;
	height: 100px;
	background-color: black;
	color: wheat;
}
</style>
