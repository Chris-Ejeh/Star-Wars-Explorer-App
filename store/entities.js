import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import PeopleReducer from './peopleReducer';

export default combineReducers({
	people: PeopleReducer,
	movies: moviesReducer,
});
