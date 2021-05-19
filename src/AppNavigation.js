import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import CatalogScreen from './screens/CatalogScreen';
import NewsScreen from './screens/NewsScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CatalogFriendsScreen from './screens/CatalogFriendsScreen';
import FriendScreen from './screens/FriendScreen';
import CameraScreen from './screens/CameraScreen';
import PhotoScreen from './screens/PhotoScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainFlow = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="MainScreen" component={MainScreen} />
			<Stack.Screen name="NewsScreen" component={NewsScreen} />
			<Stack.Screen name="CameraScreen" component={CameraScreen} />
			<Stack.Screen name="PhotoScreen" component={PhotoScreen} />
		</Stack.Navigator>
	);
};

const CatalogFlow = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="CatalogScreen" component={CatalogScreen} />
			<Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
		</Stack.Navigator>
	);
};

const FriendsFlow = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="CatalogFriendsScreen" component={CatalogFriendsScreen} />
			<Stack.Screen name="FriendScreen" component={FriendScreen} />
		</Stack.Navigator>
	);
};

const AppNavigation = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Главный" component={MainFlow} />
			<Tab.Screen name="Каталог" component={CatalogFlow} />
			<Tab.Screen name="Друзья" component={FriendsFlow} />
		</Tab.Navigator>
	);
};

export default AppNavigation;
