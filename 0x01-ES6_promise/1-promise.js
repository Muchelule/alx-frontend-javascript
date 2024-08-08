function getResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
		if(success) {
			resolve({
				status: 200,
				body: 'Success'
			});
		}
		else {
			reject(new Error('The fake API is not working currently'));
		}
	});
}

//Using the function
getFullResponseFromAPI(true)
	.then(response => console.log('Accepted!'));
	.catch(error => console.error('Rejected.'));

getFullResponseFromAPI(false)
        .then(response => console.log('Accepted!'));
        .catch(error => console.error('Rejected.'));
