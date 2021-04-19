//Base Imports
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Root Imports
import MoviesScreen from '../screens/MoviesScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const MovieNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Movies"
			component={MoviesScreen}
			options={{
				title: 'Movies',
				headerStyle: {
					backgroundColor: colors.white,
				},
				headerTintColor: colors.purple,
				headerTitleStyle: {
					fontWeight: 'bold',
					fontSize: 20,
				},
			}}
		/>
		<Stack.Screen
			name="MoviesDetails"
			component={MovieDetailsScreen}
			options={({ route }) => ({ title: route.params.title })}
		/>
	</Stack.Navigator>
);

export default MovieNavigator;
