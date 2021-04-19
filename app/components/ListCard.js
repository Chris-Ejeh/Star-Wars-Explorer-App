//Base Imports
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Root Imports
import colors from '../config/colors';

function ListCard({ name, onPress, image }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Image style={styles.image} source={image} />
			<Text style={styles.text}>{name}</Text>
			<View style={styles.icon}>
				<MaterialCommunityIcons
					name="chevron-right"
					size={32}
					color={colors.medium}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.white,
		borderRadius: 15,
		flexDirection: 'row',
		marginTop: 20,
		padding: 10,
		width: '100%',
		shadowColor: colors.black,
		shadowOffset: {
			height: 5,
			width: 0,
		},
		shadowOpacity: 0.3,
		shadowRadius: 1,
	},
	image: {
		borderRadius: 30,
		height: 60,
		width: 60,
	},
	text: {
		fontSize: 20,
		fontWeight: '600',
		marginHorizontal: 10,
	},
	icon: {
		position: 'absolute',
		top: 25,
		left: 360,
	},
});

export default ListCard;
