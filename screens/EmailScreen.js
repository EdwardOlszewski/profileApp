import React, {useState} from 'react';
import {globalStyle} from '../styles/globalStyles';
import {View, Text, Button, TextInput, Alert} from 'react-native';

export const EmailScreen = ({route, navigation}) => {
  // assign the global style sheet
  const styles = globalStyle;

  // create state variables
  const [email, setEmail] = useState(route.params.email);

  // submit handler for update button
  const submitHandler = () => {
    // validate the email is in email format
    if (email.length > 0) {
      if (email.includes('@') && email.includes('.com')) {
        navigation.navigate({
          name: 'HomeScreen',
          params: {email},
          merge: true,
        });
      } else {
        Alert.alert('Email input', 'Please enter a valid email.', [
          {text: 'Ok'},
        ]);
      }
    } else {
      Alert.alert('Email input', 'Input left empty, please enter email.', [
        {text: 'Ok'},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your email?</Text>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Your email address</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          placeholder={email}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.button}>
        <Button title="Update" color="black" onPress={submitHandler} />
      </View>
    </View>
  );
};
