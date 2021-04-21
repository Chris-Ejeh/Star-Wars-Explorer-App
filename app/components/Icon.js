//Base import
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({ name, size = 40, onPress, color }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<MaterialCommunityIcons name={name} size={size} color={color} />
		</TouchableOpacity>
	);
}

export default Icon;
