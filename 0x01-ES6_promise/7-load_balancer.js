export default function loadBalancer(chinaDownload, USDownload) {
	return new Promise.race([chinaDownload, USDownload]);
}

const chinaDownload = new Promise((resolve) => setTimeout(() => resolve('china data'), 300));
const USDownload = new Promise((resolve) => setTimeout(() => resolve('US data'), 100));

loadBalancer(chinaDownload, USDownload)
	.then(result => console.log(result));
	.catch(error => console.error(error));
