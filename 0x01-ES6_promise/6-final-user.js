import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(fristName, lastName, fileName) {
	return Promise.allsettled([
		signUpUser(firstName, lastName),
		uploadPhoto(myphoto.jpg)
	]).then((results) => {
		return results.map(result => ({
			status: result.status,
			value: result.status === 'fulfilled' ? result.value: result.reason
		}));
	});
}

handleProfileSignup('Godfrey', 'Washiswa', 'myphoto.jpg')
	.then(results => console.log(results));
