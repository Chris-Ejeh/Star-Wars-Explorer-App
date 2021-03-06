import axios from 'axios';
import { SERVER_IP } from '@env';
import * as actions from '../apiActionCreator';

const PeopleApi = ({ dispatch }) => (next) => async (action) => {
	if (action.type !== actions.apiCallBegan.type) return next(action);

	const { url, method, data, onStart, onSuccess, onError } = action.payload;

	if (onStart) dispatch({ type: onStart });

	next(action);

	try {
		const response = await axios.request({
			baseURL: SERVER_IP,
			url,
			method,
			data,
		});
		// General
		dispatch(actions.apiCallSuccess(response.data));
		// Specific
		if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
	} catch (error) {
		// General
		dispatch(actions.apiCallFailed(error.message));
		// Specific
		if (onError) dispatch({ type: onError, payload: error.message });
	}
};

export default PeopleApi;
