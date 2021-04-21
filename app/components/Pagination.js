import React, { useState } from 'react';
import {
	Dimensions,
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native';
import Icon from './Icon';

function Pagination({ totalPosts, postsPerPage, paginate }) {
	const [selectedData, setSelectedData] = useState(1);

	//Pagination numbers
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<View style={styles.container}>
			<View style={styles.PaginationContainer}>
				<Icon
					name="chevron-left"
					color="black"
					onPress={() => {
						setSelectedData(1);
						paginate(1);
					}}
				/>
				{pageNumbers.map((number, index) => (
					<TouchableOpacity
						style={
							number === selectedData ? styles.selectedButton : styles.button
						}
						key={index}
						onPress={() => {
							setSelectedData(number);
							paginate(number);
						}}
					>
						<Text style={styles.number}>{number}</Text>
					</TouchableOpacity>
				))}
				<Icon
					name="chevron-right"
					color="black"
					onPress={() => {
						setSelectedData(4);
						paginate(4);
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width,
		justifyContent: 'center',
	},
	text: {
		fontWeight: '700',
		fontSize: 30,
		padding: 10,
	},
	PaginationContainer: {
		padding: 10,
		marginBottom: 15,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	selectedButton: {
		borderRadius: 5,
		backgroundColor: '#898989',
		borderWidth: 1,
	},
	button: {
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#00000000',
	},
	number: {
		fontSize: 30,
		fontWeight: '400',
		paddingHorizontal: 15,
	},
});

export default Pagination;
