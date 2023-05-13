<script setup>
import {Events} from '@/types/Events';
import {NButton, NProgress} from 'naive-ui';
import {onMounted} from 'vue';
import {ref} from 'vue';
import bus from '@/lib/bus';

const
	hpValue = ref(0),
	hpMaximum = ref(0),
	manaValue = ref(0),
	manaMaximum = ref(0),
	image = '/images/avatar.png';

onMounted(() => {
	bus.$on(Events.SET_PLAYER_HP, (newState) => {
		hpValue.value = newState.value;
		hpMaximum.value = newState.maximum;
	});
	bus.$on(Events.SET_PLAYER_MANA, (newState) => {
		manaValue.value = newState.value;
		manaMaximum.value = newState.maximum;
	});
});
</script>

<template>
	<div id="profile">
		<div class="avatar">
			<div
				class="avatar-icon"
				v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
			></div>
			<n-progress
				type="circle"
				:percentage="20"
				status="warning"
				class="wrapper"
			>.</n-progress>
		</div>

		<n-progress
			type="line"
			status="error"
			:percentage="hpValue / (hpMaximum / 100)"
			:height="24"
			border-radius="12px 0 12px 0"
			fill-border-radius="12px 0 12px 0"
		>
			<!-- ({{ hpValue }} / {{ hpMaximum }}) -->
		</n-progress>
		<n-progress
			type="line"
			:percentage="manaValue / (manaMaximum / 100)"
			:height="24"
			border-radius="12px 0 12px 0"
			fill-border-radius="12px 0 12px 0"
		>
			<!-- ({{ manaValue }} / {{ manaMaximum }}) -->
		</n-progress>
	</div>
</template>

<style lang="scss">
#profile {
	$margin: 50px;
	//
	background-color: lime;
	border: 0;
	color: wheat;
	height: 130px;
	left: $margin;
	position: absolute;
	top: $margin;
	width: 400px;
	z-index: 10;

	.avatar {
		.wrapper {
			position: absolute;
			z-index: 20;
		}

		.avatar-icon {
			background-position: 0 10px;
			background-repeat: no-repeat;
			background-size: 100px 110px;
			height: 105px;
			left: 10px;
			position: absolute;
			top: 10px;
			width: 100px;
			z-index: 10;
		}
	}
}
</style>
