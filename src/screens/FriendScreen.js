/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const FriendScreen = (props) => {
	const { route } = props;
	const { data } = route.params;
	const { name, surname, phone, email } = data;
	return (
		<View style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../../static/img/cat.jpg')}
            />
            <View style={styles.containerFriend}>
                <Text style={styles.textFriend}>My name is {surname} {name}</Text>
                <Text style={styles.textFriend}>My number is {phone}</Text>
                <Text style={styles.textFriend}>My email is {email}</Text>
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
      flex: 3,
    },
    stretch: {
      flex:2,
      height: '100%',
      width: '100%',
      resizeMode: 'stretch',
    },
    containerFriend: {
        flex:1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 3,
        borderBottomColor: 'black',
        justifyContent:'center',
        alignItems:'center',
    },
    textFriend: {
        padding: 5,
        fontWeight: 'bold',
    },
});

export default FriendScreen;
