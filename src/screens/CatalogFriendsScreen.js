/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const CatalogScreen = (props) => {
	const { navigation } = props;

    const data = [
        {
          '_id': 0,
          'name': 'Celina',
          'surname': 'Gay',
          'phone': '(858) 451-2785',
          'email': 'celinagay@rooforia.com',
        },
        {
          '_id': 1,
          'name': 'Riddle',
          'surname': 'Barker',
          'phone': '(840) 511-3782',
          'email': 'riddlebarker@rooforia.com',
        },
        {
          '_id': 2,
          'name': 'Britt',
          'surname': 'Reed',
          'phone': '(964) 567-2279',
          'email': 'brittreed@rooforia.com',
        },
        {
          '_id': 3,
          'name': 'Patrice',
          'surname': 'Ruiz',
          'phone': '(832) 506-3973',
          'email': 'patriceruiz@rooforia.com',
        },
        {
          '_id': 4,
          'name': 'Cortez',
          'surname': 'Holt',
          'phone': '(866) 597-2552',
          'email': 'cortezholt@rooforia.com',
        },
        {
          '_id': 5,
          'name': 'Wilder',
          'surname': 'Kelly',
          'phone': '(800) 494-2819',
          'email': 'wilderkelly@rooforia.com',
        },
        {
          '_id': 6,
          'name': 'Diane',
          'surname': 'Combs',
          'phone': '(920) 536-2252',
          'email': 'dianecombs@rooforia.com',
        },
        {
          '_id': 7,
          'name': 'Mcmillan',
          'surname': 'Rivas',
          'phone': '(959) 425-3017',
          'email': 'mcmillanrivas@rooforia.com',
        },
        {
          '_id': 8,
          'name': 'Lucinda',
          'surname': 'Dotson',
          'phone': '(994) 541-2120',
          'email': 'lucindadotson@rooforia.com',
        },
        {
          '_id': 9,
          'name': 'Clements',
          'surname': 'Mcmillan',
          'phone': '(906) 559-2905',
          'email': 'clementsmcmillan@rooforia.com',
        },
        {
          '_id': 10,
          'name': 'Harrison',
          'surname': 'Nelson',
          'phone': '(887) 525-3085',
          'email': 'harrisonnelson@rooforia.com',
        },
        {
          '_id': 11,
          'name': 'Mosley',
          'surname': 'Yang',
          'phone': '(947) 557-2068',
          'email': 'mosleyyang@rooforia.com',
        },
        {
          '_id': 12,
          'name': 'Fitzpatrick',
          'surname': 'Morton',
          'phone': '(821) 419-3084',
          'email': 'fitzpatrickmorton@rooforia.com',
        },
        {
          '_id': 13,
          'name': 'Watson',
          'surname': 'Winters',
          'phone': '(900) 404-3948',
          'email': 'watsonwinters@rooforia.com',
        },
        {
          '_id': 14,
          'name': 'Marshall',
          'surname': 'Mcdowell',
          'phone': '(897) 585-2435',
          'email': 'marshallmcdowell@rooforia.com',
        },
        {
          '_id': 15,
          'name': 'Marcy',
          'surname': 'Pitts',
          'phone': '(828) 485-3995',
          'email': 'marcypitts@rooforia.com',
        },
        {
          '_id': 16,
          'name': 'Marks',
          'surname': 'Wooten',
          'phone': '(867) 419-3496',
          'email': 'markswooten@rooforia.com',
        },
        {
          '_id': 17,
          'name': 'Corine',
          'surname': 'Brock',
          'phone': '(848) 435-2744',
          'email': 'corinebrock@rooforia.com',
        },
        {
          '_id': 18,
          'name': 'Audra',
          'surname': 'Dean',
          'phone': '(913) 535-3876',
          'email': 'audradean@rooforia.com',
        },
        {
          '_id': 19,
          'name': 'Suarez',
          'surname': 'Hurley',
          'phone': '(894) 428-3262',
          'email': 'suarezhurley@rooforia.com',
        },
        {
          '_id': 20,
          'name': 'Angelique',
          'surname': 'Crosby',
          'phone': '(813) 436-2970',
          'email': 'angeliquecrosby@rooforia.com',
        },
        {
          '_id': 21,
          'name': 'Carpenter',
          'surname': 'Davenport',
          'phone': '(932) 466-2752',
          'email': 'carpenterdavenport@rooforia.com',
        },
        {
          '_id': 22,
          'name': 'Mable',
          'surname': 'Yates',
          'phone': '(847) 432-2100',
          'email': 'mableyates@rooforia.com',
        },
        {
          '_id': 23,
          'name': 'Danielle',
          'surname': 'Moran',
          'phone': '(835) 592-3664',
          'email': 'daniellemoran@rooforia.com',
        },
        {
          '_id': 24,
          'name': 'Amanda',
          'surname': 'Navarro',
          'phone': '(931) 436-3784',
          'email': 'amandanavarro@rooforia.com',
        },
      ];

	return (
		<View style={styles.container}>
			<FlatList
        style={{width:'100%'}}
				data={data}
				renderItem={(item) => {
					return (
						<View style={styles.cardButton}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									navigation.navigate('FriendScreen', { data: item.item });
								}}
							>
								<Text style={styles.textButton}>{item.item.surname} {item.item.name}</Text>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButton:{
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
	button: {
    flex:1,
    backgroundColor: '#fff',
    padding: 10,
    width:'100%',
	},
  textButton:{
    padding: 5,
    fontWeight: 'bold',
  },
});

export default CatalogScreen;
