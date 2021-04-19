//Base Imports
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../../store/moviesReducer';

//Root Imports
import ActivityIndicator from '../components/ActivityIndicator';
import ListCard from '../components/ListCard';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import colors from '../config/colors';

const image = require('../assets/images/people_photo.jpeg');

function MoviesScreen({ navigation }) {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.entities.movies.list);
	const loading = useSelector((state) => state.entities.movies.loading);

	useEffect(() => {
		dispatch(loadMovies());
	}, []);

	return (
		<Screen style={styles.container}>
			{movies.length === 0 ? (
				<ActivityIndicator visible={loading} />
			) : (
				<FlatList
					data={movies}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => {
						return index.toString();
					}}
					renderItem={({ item }) => (
						<ListCard
							name={item.title}
							image={image}
							onPress={() => navigation.navigate(routes.Movies_Details, item)}
						/>
					)}
				/>
			)}
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#c1cad6',
		justifyContent: 'center',
		padding: 10,
		width: '100%',
	},
});

export default MoviesScreen;
