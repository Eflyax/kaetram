import mitt from 'mitt';

const bus = mitt();

export default {
	$on: (...args) => bus.on(...args),
	$once: (...args) => bus.once(...args),
	$off: (...args) => bus.off(...args),
	$emit: (...args) => bus.emit(...args)
};
