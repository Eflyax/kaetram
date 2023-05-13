import {createApp} from 'vue';
import App from './App.vue';
import mitt from 'mitt';

const
	emitter = mitt(),
	app = createApp(App);

app.config.globalProperties.bus = emitter;
app.mount('#app');
