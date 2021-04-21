//Base Imports
import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';

//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { addPeople, loadPeople } from '../../store/peopleReducer';

//Root Imports
import ActivityIndicator from '../components/ActivityIndicator';
import ListCard from '../components/ListCard';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import Pagination from '../components/Pagination';

const image = require('../assets/images/people_photo.jpeg');

function PeopleScreen({ navigation }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(6);

	//Redux connect in function component
	const dispatch = useDispatch();
	const people = useSelector((state) => state.entities.people.list);
	const loading = useSelector((state) => state.entities.people.loading);
	const refreshing = useSelector((state) => state.entities.people.refreshing);
	const next = useSelector((state) => state.entities.people.next);

	useEffect(() => {
		dispatch(loadPeople());
	}, []);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);

	console.log(next);
	return (
		<Screen style={styles.container}>
			{people.length <= 10 ? (
				<>
					<ActivityIndicator visible={loading} />
					<FlatList
						data={people}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index) => {
							return index.toString();
						}}
						renderItem={({ item }) => (
							<ListCard
								name={item.name}
								image={image}
								onPress={() => navigation.navigate(routes.People_Details, item)}
							/>
						)}
						refreshControl={
							<RefreshControl
								refreshing={refreshing}
								onRefresh={() => dispatch(addPeople())}
							/>
						}
					/>
				</>
			) : (
				<>
					<FlatList
						data={currentPosts}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index) => {
							return index.toString();
						}}
						renderItem={({ item }) => (
							<ListCard
								name={item.name}
								image={image}
								onPress={() => navigation.navigate(routes.People_Details, item)}
							/>
						)}
						refreshControl={
							<RefreshControl
								refreshing={refreshing}
								onRefresh={() => dispatch(addPeople())}
							/>
						}
					/>
					<Pagination
						postsPerPage={postsPerPage}
						totalPosts={people.length}
						paginate={paginate}
					/>
				</>
			)}
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'grey',
		justifyContent: 'center',
		padding: 10,
		width: '100%',
	},
});

export default PeopleScreen;
