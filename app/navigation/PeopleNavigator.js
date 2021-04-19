//Base Imports
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Root Imports
import PeopleScreen from '../screens/PeopleScreen';
import PeopleDetailsScreen from '../screens/PeopleDetailsScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const PeopleNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="People"
			component={PeopleScreen}
			options={{
				title: 'People',
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
			name="PeopleDetails"
			component={PeopleDetailsScreen}
			options={({ route }) => ({ title: route.params.name })}
		/>
	</Stack.Navigator>
);

export default PeopleNavigator;
