function handleResponseFromAPI(promise){
	promise.then(response => {
		console.log('Got a response from the API');
		return {
			status: 200,
			body: 'success'
		};
	}).catch(error => {
		console.log('Got an error from the API');
		return new Error();
	};
}

const promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		if(Math.random() < 0.5) {
			resolve('success');
		}
		else {
			reject(new Error('Error occured!');
		}
	}, 200);
});
handleResponseFromAPI(promise);:
