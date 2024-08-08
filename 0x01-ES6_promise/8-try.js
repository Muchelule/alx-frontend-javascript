export default function divideFunction(numerator, denominator) {
	if(denominator === 0) {
		throw new Error('Cannot devide by 0');
	}
	return numerator / denominator;
}

try {
	console.log(divideFunction(20, 2));
	console.log(divideFunction(2, 20));
} catch(error) {
	console.erroe(error.message);
}
