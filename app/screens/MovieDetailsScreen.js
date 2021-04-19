//Base Imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Root Imports
import colors from '../config/colors';
import Screen from '../components/Screen';

function MovieDetailsScreen({ route }) {
	const movie = route.params;

	return (
		<Screen style={styles.container}>
			<LinearGradient
				colors={['rgba(35,255,255,1)', 'rgba(135,58,200,1)']}
				style={styles.detailsContainer}
			>
				<View style={styles.detailsView}>
					<Text style={styles.detailsTitle}>Director</Text>
					<Text style={styles.details}>{movie.director}</Text>
					<Text style={styles.detailsTitle}>Producer</Text>
					<Text style={styles.details}>{movie.producer}</Text>
					<Text style={styles.detailsTitle}>Release Date</Text>
					<Text style={styles.details}>{movie.release_date}</Text>
				</View>
			</LinearGradient>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#c1cad6',
		alignItems: 'center',
		paddingVertical: 30,
		width: '100%',
	},
	detailsContainer: {
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		width: '80%',
	},
	detailsView: {
		alignItems: 'center',
		backgroundColor: colors.white,
		marginTop: 10,
		padding: 10,
		width: '100%',
	},
	detailsTitle: {
		fontSize: 20,
		fontWeight: '400',
		color: colors.black,
	},
	details: {
		color: colors.black,
		fontSize: 25,
		fontWeight: '700',
		marginBottom: 30,
	},
});

export default MovieDetailsScreen;
