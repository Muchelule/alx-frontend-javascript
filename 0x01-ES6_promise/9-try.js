export default function guardrail(mathFunction) {
	const queue = [];

	try {
		const result= mathFunction();
		queue.push(result);
	} catch(error) {
		queue.push(error.message);
	}

	queue.push('Guardrail is processed.');
	return queue;

function guardrail() {
	return 1000;
