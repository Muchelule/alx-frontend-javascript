
function signUpUser(firstName, lastName) {
	return new Promise((resolve, reject) => {
		resolve({
			firstName: firstName,
			lastName: lastName
		});
	});
}

//Calling the function
signUpUser('Godfrey', 'Washiswa').then(user => console.log(user));
