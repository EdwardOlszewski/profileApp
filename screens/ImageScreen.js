import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {globalStyle} from '../styles/globalStyles';
import {View, Text, Button, TextInput, Alert, Image} from 'react-native';

export const ImageScreen = ({route, navigation}) => {
  // assign the global style sheet
  const styles = globalStyle;

  // create state variables
  const [imgURL, setImgURL] = useState(route.params.imgURL);
  const [imgUploaded, setImgUploaded] = useState(false);

  // handler to choose photo when 'choose photo' is clicked
  const choosePhotoHandler = () => {
    launchImageLibrary('', response => {
      if (response.assets) {
        setImgURL(response.assets[0].uri);
        setImgUploaded(true);
      }
    });
  };

  // submit handler for update button
  const submitHandler = () => {
    // go back to home screen update the home state variable with the updated information
    navigation.navigate({
      name: 'HomeScreen',
      params: {imgURL},
      merge: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload a photo of yourself:</Text>

      <View>
        <Image style={styles.img} source={{uri: imgURL}} />
      </View>

      <View style={styles.choosePhotoBtn}>
        <Button
          title="Choose Photo"
          color="black"
          onPress={choosePhotoHandler}
        />
      </View>
      {imgUploaded && (
        <View style={styles.button}>
          <Button title="Update" color="black" onPress={submitHandler} />
        </View>
      )}
    </View>
  );
};
