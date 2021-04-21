//Base Imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Root Imports
import colors from '../config/colors';
import Screen from '../components/Screen';

function PeopleDetailsScreen({ route }) {
	const people = route.params;

	return (
		<Screen style={styles.container}>
			<LinearGradient
				colors={['rgba(35,255,255,1)', 'rgba(135,58,200,1)']}
				style={styles.detailsContainer}
			>
				<View style={styles.detailsView}>
					<Text style={styles.detailsTitle}>Gender</Text>
					<Text style={styles.details}>{people.gender}</Text>
					<Text style={styles.detailsTitle}>Height</Text>
					<Text style={styles.details}>{people.height}</Text>
					<Text style={styles.detailsTitle}>Mass</Text>
					<Text style={styles.details}>{people.mass}</Text>
					<Text style={styles.detailsTitle}>Hair Color</Text>
					<Text style={styles.details}>{people.hair_color}</Text>
					<Text style={styles.detailsTitle}>Skin Color</Text>
					<Text style={styles.details}>{people.skin_color}</Text>
					<Text style={styles.detailsTitle}>Birth Year</Text>
					<Text style={styles.details}>{people.birth_year}</Text>
				</View>
			</LinearGradient>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f0efeb',
		alignItems: 'center',
		paddingVertical: 30,
		width: '100%',
	},
	detailsView: {
		alignItems: 'center',
		backgroundColor: colors.white,
		marginTop: 10,
		padding: 10,
		width: '100%',
	},
	detailsContainer: {
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		width: '90%',
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
		marginBottom: 20,
	},
});

export default PeopleDetailsScreen;
