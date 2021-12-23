import React, {useState} from 'react';
import {globalStyle} from '../styles/globalStyles';
import {View, Text, Button, TextInput, Alert} from 'react-native';

export const NameScreen = ({route, navigation}) => {
  // assign the global style sheet
  const styles = globalStyle;

  // create state variables
  const [firstName, setFirstName] = useState(route.params.firstName);
  const [lastName, setLastName] = useState(route.params.lastName);

  // submit handler for update button
  const submitHandler = () => {
    // validate user entry
    if (firstName.length == 0 || lastName.length == 0) {
      Alert.alert('Name Input', 'Please enter a valid name', [{text: 'Ok'}]);
    } else {
      // go back to home screen update the home state variable with the updated information
      navigation.navigate({
        name: 'HomeScreen',
        params: {firstName, lastName},
        merge: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your Name?</Text>

      <View style={styles.row}>
        <View style={styles.inputSection}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            autoCapitalize="words"
            style={styles.textInput}
            placeholder={firstName}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            autoCapitalize="words"
            style={styles.textInput}
            placeholder={lastName}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>

      <View style={styles.button}>
        <Button
          style={{backgroundColor: 'black'}}
          title="Update"
          color="black"
          onPress={submitHandler}
        />
      </View>
    </View>
  );
};
