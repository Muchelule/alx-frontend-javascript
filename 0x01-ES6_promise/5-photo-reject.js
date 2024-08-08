import uploadPhoto from './5-photo-reject';

export default function uploadPhoto(5-photo-reject) {
	return new Promise.reject(new Error(`${5-photo-reject} cannot be processed`));
}

uploadPhoto('myphoto.jpg').catch(erro => console.log(error.message));
