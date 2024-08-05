export default function getNeighborhoodList() {
	this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	const self = this;
	this.addNeighborhood = (newNeighborhood) => {
		this.sanFranciscoNeighborhoods.push(newNeighborhood);
		return this.sanFransiscoNeighborhoods;
	};
}
