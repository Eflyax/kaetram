import {ref} from 'vue';
import App from './../app';
import Game from './../game';

const engine = ref({});

export default function useGame() {

	function initEngine(): void {
		engine.value = new Game(new App());

		return engine;
	}

	return {
		initEngine
	};
}
