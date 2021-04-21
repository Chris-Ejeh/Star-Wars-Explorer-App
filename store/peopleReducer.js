import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './apiActionCreator';

const slice = createSlice({
	name: 'people',
	initialState: {
		list: [],
		loading: false,
		refreshing: false,
		next: '',
	},
	reducers: {
		peopleRequested: (state = initialState, action) => {
			state.loading = true;
		},
		peopleReceived: (state, action) => {
			state.list = action.payload.results;
			state.next = action.payload.next;
			state.loading = false;
		},
		peopleRequestFailed: (state, action) => {
			state.loading = false;
		},
		peopleAdded: (state, action) => {
			state.refreshing = true;
			state.list.unshift(...action.payload.results);
			state.refreshing = false;
		},
	},
});

export const {
	peopleReceived,
	peopleRequested,
	peopleRequestFailed,
	peopleAdded,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = 'people/?page=';

export const loadPeople = () => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url,
			onStart: peopleRequested.type,
			onSuccess: peopleReceived.type,
			onError: peopleRequestFailed.type,
		}),
	);
};

export const addPeople = (newData) =>
	apiCallBegan({
		url: url + '2',
		method: 'get',
		data: newData,
		onSuccess: peopleAdded.type,
	});
