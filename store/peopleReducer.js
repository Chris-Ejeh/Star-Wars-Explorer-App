import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './apiActionCreator';

const slice = createSlice({
	name: 'people',
	initialState: {
		list: [],
		loading: false,
		refreshing: false,
	},
	reducers: {
		peopleRequested: (state = initialState, action) => {
			state.loading = true;
		},

		peopleReceived: (state, action) => {
			state.list = action.payload;
			state.loading = false;
		},
		peopleRequestFailed: (state, action) => {
			state.loading = false;
		},
		peopleAdded: (state, action) => {
			state.refreshing = true;
			const newArr = action.payload;
			newArr.filter((e) => {
				if ((state.refreshing = false)) state.loading = false;
				return state.list.unshift({ ...e });
			});
			// state.list.unshift(action.payload);
			// state.refreshing = false;
			// state.loading = false;
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
