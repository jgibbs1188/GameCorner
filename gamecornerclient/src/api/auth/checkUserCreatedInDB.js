import axios from 'axios';

const baseURL = 'https://localhost:7035/api'

const checkUserCreatedInDB = async () => {
	//get the token from sessionStorage like this
	const token = sessionStorage.getItem("token");

	//send the request with an Authorization header containing the token
	await axios.get(`${baseURL}/Users/Auth`, {
		headers: { Authorization: 'Bearer ' + token },
	});
};

export default checkUserCreatedInDB;