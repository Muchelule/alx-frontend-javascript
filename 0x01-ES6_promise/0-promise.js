function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const response = {
				data: 'API call successful!',
				status: 200
			};
			if(response.status ===200) {
				resolve(response.dat);
			}

			else {
				reject(new Error('API call rejected'));
			}
		}, 200);
	});
}

