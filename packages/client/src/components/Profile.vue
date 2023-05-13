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
				:color="'#ffd100'"
			>.</n-progress>
		</div>

		<div class="bars">
			<n-progress
				type="line"
				status="error"
				:percentage="hpValue / (hpMaximum / 100)"
				:height="24"
				border-radius="12px 0 12px 0"
				fill-border-radius="12px 0 12px 0"
				:indicator-placement="'inside'"
			/>
			<n-progress
				type="line"
				:percentage="manaValue / (manaMaximum / 100)"
				:height="24"
				border-radius="12px 0 12px 0"
				fill-border-radius="12px 0 12px 0"
				:indicator-placement="'inside'"
			/>
		</div>
	</div>
</template>

<style lang="scss">
$backgroundColor: black;

#profile {
	$margin: 50px;
	//
	border: 0;
	color: wheat;
	display: flex;
	flex-direction: row;
	height: 130px;
	left: $margin;
	position: absolute;
	top: $margin;
	width: 400px;
	z-index: 100;

	.avatar {
		background-color: $backgroundColor;
		border-radius: 120px;
		height: 120px;
		padding: 10px;
		width: 120px;

		.wrapper {
			position: absolute;
			z-index: 20;
		}

		.avatar-icon {
			$backgroundSize: 110px;
			//
			background-repeat: no-repeat;
			background-size: $backgroundSize $backgroundSize;
			height: 105px;
			left: 25px;
			position: absolute;
			top: 25px;
			width: 115px;
			z-index: 10;
		}
	}

	.bars {
		$leftOverflow: 65px;
		//
		background-color: $backgroundColor;
		flex: 1;
		margin-left: -$leftOverflow;
		padding: 10px 10px 10px $leftOverflow;
	}
}
</style>
