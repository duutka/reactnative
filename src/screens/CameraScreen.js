import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = (props) => {
	const { navigation } = props;

	const takePicture = async (camera) => {
		const options = { quality: 0.5, base64: true };
		const data = await camera.takePictureAsync(options);
		navigation.navigate('PhotoScreen', { photo: data.uri });
	};

	const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);

	const changeCameraType = () => {
		cameraType === RNCamera.Constants.Type.back
			? setCameraType(RNCamera.Constants.Type.front)
			: setCameraType(RNCamera.Constants.Type.back);
	};

	const [cameraFlash, setCameraFlash] = useState(RNCamera.Constants.FlashMode.off);

	const changeCameraFlash = () => {
		cameraFlash === RNCamera.Constants.FlashMode.off
			? setCameraFlash(RNCamera.Constants.FlashMode.on)
			: setCameraFlash(RNCamera.Constants.FlashMode.off);
	};

	return (
		<View style={styles.container}>
			<RNCamera
				style={styles.preview}
				type={cameraType}
				flashMode={cameraFlash}
				androidCameraPermissionOptions={{
					title: 'Permission to use camera',
					message: 'We need your permission to use your camera',
					buttonPositive: 'Ok',
					buttonNegative: 'Cancel',
				}}
				androidRecordAudioPermissionOptions={{
					title: 'Permission to use audio recording',
					message: 'We need your permission to use your audio',
					buttonPositive: 'Ok',
					buttonNegative: 'Cancel',
				}}
			>
				{({ camera, status, recordAudioPermissionStatus }) => {
					return (
						<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
							<TouchableOpacity
								onPress={() => changeCameraType()}
								style={styles.capture}
							>
								<Text style={{ fontSize: 14 }}> TURN </Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => takePicture(camera)}
								style={styles.capture}
							>
								<Text style={{ fontSize: 14 }}> SNAP </Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => changeCameraFlash()}
								style={styles.capture}
							>
								<Text style={{ fontSize: 14 }}> FLASH {cameraFlash} </Text>
							</TouchableOpacity>
						</View>
					);
				}}
			</RNCamera>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'black',
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: 'center',
		margin: 20,
	},
});

export default CameraScreen;
