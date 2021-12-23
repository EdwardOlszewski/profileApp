import React, {useState} from 'react';
import {globalStyle} from '../styles/globalStyles';
import {View, Text, Button, TextInput, Alert} from 'react-native';

export const AboutScreen = ({route, navigation}) => {
  // assign the global style sheet
  const styles = globalStyle;

  // create state variables
  const [about, setAbout] = useState(route.params.about);

  // submit handler for update button
  const submitHandler = () => {
    // validate user entry
    if (!about.length == 1) {
      Alert.alert(
        'About Input',
        'Input left empty, please enter something about yourself.',
        [{text: 'Ok'}],
      );
    } else {
      // go back to home screen update the home state variable with the updated information
      navigation.navigate({
        name: 'HomeScreen',
        params: {about},
        merge: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What type of passenger are you?</Text>

      <View style={styles.inputSection}>
        <Text style={styles.label}>
          Write a little bit about yourself. Do you like chatting? Are you a
          smoker? Do you bring pets with you? Etc.
        </Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="sentences"
          multiline
          numberOfLines={5}
          maxLength={150}
          placeholder={about}
          value={about}
          onChangeText={setAbout}
        />
      </View>

      <View style={styles.aboutButton}>
        <Button title="Update" color="black" onPress={submitHandler} />
      </View>
    </View>
  );
};
