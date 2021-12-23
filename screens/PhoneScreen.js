import React, {useState} from 'react';
import {globalStyle} from '../styles/globalStyles';
import {View, Text, Button, TextInput, Alert} from 'react-native';

export const PhoneScreen = ({route, navigation}) => {
  // assign the global style sheet
  const styles = globalStyle;

  // create state variables
  const [phone, setPhone] = useState(route.params.phone);

  // submit handler for update button
  const submitHandler = () => {
    // validate user entry
    if (phone.length != 14) {
      Alert.alert('Phone Number Input', 'Invalid phone number entered', [
        {text: 'Ok'},
      ]);
    } else {
      // go back to home screen update the home state variable with the updated information
      navigation.navigate({
        name: 'HomeScreen',
        params: {phone},
        merge: true,
      });
    }
  };

  // update the phone number input with the correct format. ex: (xxx) xxx-xxxx
  const numChange = value => {
    if (value.length == 3 && !isNaN(value)) {
      setPhone('(' + value.slice(0, 3) + ') ');
    } else if (value.length == 10 && !value.includes('-', 9)) {
      setPhone(value.slice(0, 9) + '-' + value.slice(9));
    } else if (value.length > 14) {
      Alert.alert('Phone Number Input', 'Maxed number input reached', [
        {text: 'Ok'},
      ]);
    } else {
      setPhone(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your phone number?</Text>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Your phone number</Text>
        <TextInput
          style={styles.textInput}
          textContentType="telephoneNumber"
          dataDetectorTypes="phoneNumber"
          keyboardType="numeric"
          placeholder={phone}
          value={phone}
          onChangeText={text => numChange(text)}
        />
      </View>

      <View style={styles.button}>
        <Button title="Update" color="black" onPress={submitHandler} />
      </View>
    </View>
  );
};
