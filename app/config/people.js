import React from 'react';
import axios from 'axios';
//import { SERVER_IP } from '@env';
//const endpoint = '/people/1/';

function people(props) {
	const url = 'https://swapi.dev/api/';

	const getPeople = () => {
		axios.get(`${url}/people/1`).then((res) => {
			console.log(res.data);
		});
	};
}

export default people;
