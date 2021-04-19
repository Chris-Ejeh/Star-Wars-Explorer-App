import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/ApiCall';

export default function () {
	return configureStore({
		reducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
	});
}
