//Base Imports
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Root Imports
import PeopleNavigator from './PeopleNavigator';
import MovieNavigator from './MovieNavigator';
import MoviesScreen from '../screens/MoviesScreen';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigation = () => (
	<Tab.Navigator
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;

				if (route.name === 'People') {
					iconName = focused ? 'people-outline' : 'people-sharp';
				} else if (route.name === 'Movies') {
					iconName = focused ? 'film-outline' : 'film-sharp';
				}

				// Return any component that you like here!
				return <Ionicons name={iconName} size={size} color={color} />;
			},
		})}
		tabBarOptions={{
			activeTintColor: colors.purple,
			inactiveTintColor: colors.medium,
		}}
	>
		<Tab.Screen name="People" component={PeopleNavigator} />
		<Tab.Screen name="Movies" component={MovieNavigator} />
	</Tab.Navigator>
);

export default AppNavigation;
