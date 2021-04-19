import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './app/navigation/AppNavigation';
import configureStore from './store/configureStore';

import { Provider } from 'react-redux';

const store = configureStore();

export default function App() {
	return (
		//Provider: value={Object provided to component tree}

		<Provider store={store}>
			<NavigationContainer>
				<StatusBar style="auto" />
				<AppNavigation />
			</NavigationContainer>
		</Provider>
	);
}
