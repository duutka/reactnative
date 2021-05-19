import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

const RestaurantScreen = (props) => {
	const { route } = props;
	const { data } = route.params;

	const { name, type, description, review, logo, phone_number, address, hours } = data;

	return (
		<ScrollView style={styles.main}>
			<Text style={styles.nameRestaurant}>{name}</Text>
			<Image
				style={styles.imageLogo}
				source={{
					uri: logo,
				}}
			/>
			<View style={styles.mainContainer}>
				<Text style={styles.subNameRestaurant}>Restaurant with {type} kitchen</Text>
				<View style={styles.containerInfo}>
					<View>
						<Text style={styles.Title}> Address</Text>
						<Text style={styles.subTitle}> {address} </Text>
					</View>
				</View>
				<View style={styles.containerInfo}>
					<View>
						<Text style={styles.Title}>Phone</Text>
						<Text style={styles.subTitle}> {phone_number} </Text>
					</View>
				</View>
				<View style={styles.containerInfo}>
					<Text style={styles.Title}>Work Time</Text>
					<View style={styles.container}>
						<Text>
							Mon:
							<Text style={styles.Title}>
								From {hours.monday.opens_at} To {hours.monday.closes_at}
							</Text>
						</Text>
						<Text>
							Tue:
							<Text style={styles.Title}>
								From {hours.tuesday.opens_at} To {hours.tuesday.closes_at}
							</Text>
						</Text>
						<Text>
							Wed:
							<Text style={styles.Title}>
								From {hours.wednesday.opens_at} To {hours.wednesday.closes_at}
							</Text>
						</Text>
						<Text>
							Thu:
							<Text style={styles.Title}>
								From {hours.thursday.opens_at} To {hours.thursday.closes_at}
							</Text>
						</Text>
						<Text>
							Fri:
							<Text style={styles.Title}>
								From {hours.friday.opens_at} To {hours.friday.closes_at}
							</Text>
						</Text>
						<Text>
							Sat:
							<Text style={styles.Title}>
								From {hours.saturday.opens_at} To {hours.saturday.closes_at}
							</Text>
						</Text>
						<Text>
							Sun:
							<Text style={styles.Title}>
								From {hours.sunday.opens_at} To {hours.sunday.closes_at}
							</Text>
						</Text>
					</View>
				</View>
				<View style={styles.containerInfo}>
					<Text style={styles.Title}>Description</Text>
					<Text>{description}</Text>
				</View>
				<View style={styles.containerInfo}>
					<Text style={styles.Title}>Reviews</Text>
					<View>
						<View style={styles.containerUser}>
							<Text style={styles.nameTextUser}>
								<Image
									style={styles.imageUser}
									source={require('../../static/img/unnamed.png')}
								/>
								dmitrii.pischasov
							</Text>
							<Text>{review}</Text>
						</View>
						<View style={styles.containerUser}>
							<Text style={styles.nameTextUser}>
								<Image
									style={styles.imageUser}
									source={require('../../static/img/unnamed.png')}
								/>
								ivan.ivanov
							</Text>
							<Text>{review}</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#fff',
	},
	imageLogo: {
		height: 500,
		width: null,
	},
	nameRestaurant: {
		padding: 10,
		color: '#000',
		fontSize: 22,
		fontWeight: '700',
	},
	subNameRestaurant: {
		padding: 10,
		color: '#000',
		fontSize: 18,
		fontWeight: '700',
	},
	Title: {
		color: '#999',
		fontSize: 13,
	},
	subTitle: {
		paddingLeft: 10,
		color: '#000',
		fontSize: 13,
	},
	mainContainer: {
		flexGrow: 1,
		padding: 5,
	},
	container: {
		padding: 10,
	},
	containerInfo: {
		padding: 10,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#f9f8f8',
		borderLeftWidth: 0,
		borderRightWidth: 0,
	},
	nameTextUser: {
		fontSize: 13,
		flexDirection: 'row',
	},
	imageUser: {
		height: 20,
		width: 20,
	},
	containerUser: {
		flex: 1,
	},
});

export default RestaurantScreen;
