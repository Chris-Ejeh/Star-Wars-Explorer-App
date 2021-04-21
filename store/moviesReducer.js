import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './apiActionCreator';

const slice = createSlice({
	name: 'movies',
	initialState: {
		list: [],
		loading: false,
		error: false,
	},
	reducers: {
		moviesRequested: (state, action) => {
			state.loading = true;
			state.error = false;
		},

		moviesReceived: (state, action) => {
			state.list = action.payload.results;
			state.loading = false;
			state.error = false;
		},
		moviesRequestFailed: (state, action) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export const {
	moviesReceived,
	moviesRequested,
	moviesRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = 'films/';

export const loadMovies = () => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url,
			onStart: moviesRequested.type,
			onSuccess: moviesReceived.type,
			onError: moviesRequestFailed.type,
		}),
	);
};
