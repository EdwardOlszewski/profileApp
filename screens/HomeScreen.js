import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MatComIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export const HomeScreen = ({route, navigation}) => {
  const [firstName, setFirstName] = useState('Micah');
  const [lastName, setLastName] = useState('Smith');
  const [phone, setPhone] = useState('(208) 206-5039');
  const [email, setEmail] = useState('micahsmith@gmail.com');
  const [imgURL, setImgURL] = useState(
    'https://nixalar-digital-agency.vercel.app/images/user2.jpg',
  );
  const [about, setAbout] = useState(
    'Hi my name is Micah Smith. I am from Mesa but go to school in Salt Lake City. I make this drive all the time and have plenty.',
  );

  React.useEffect(() => {
    if (route.params?.firstName) {
      setFirstName(route.params.firstName);
    }
    if (route.params?.lastName) {
      setLastName(route.params.lastName);
    }
    if (route.params?.phone) {
      setPhone(route.params.phone);
    }
    if (route.params?.email) {
      setEmail(route.params.email);
    }
    if (route.params?.about) {
      setAbout(route.params.about);
    }
    if (route.params?.imgURL) {
      setImgURL(route.params.imgURL);
    }
  }, [
    route.params?.firstName,
    route.params?.lastName,
    route.params?.phone,
    route.params?.email,
    route.params?.about,
    route.params?.imgURL,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.pencilContainer}>
        <MatComIcon
          style={styles.pencilIcon}
          name="pencil"
          size={20}
          color="#b2b3b3"
        />
      </View>

      <TouchableOpacity
        style={{cursor: 'pointer'}}
        onPress={() => {
          navigation.navigate('ImageScreen', {
            imgURL,
          });
        }}>
        <Image style={styles.img} source={{uri: imgURL}} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NameScreen', {
            firstName,
            lastName,
          });
        }}>
        <Text style={styles.inputTextTitle}>Name</Text>
        <View style={styles.row}>
          <Text style={styles.inputText}>
            {firstName} {''}
            {lastName}
          </Text>
          <Icon
            style={styles.icon}
            name="arrow-forward-ios"
            size={20}
            color="#b2b3b3"
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PhoneScreen', {
            phone,
          });
        }}>
        <Text style={styles.inputTextTitle}>Phone</Text>
        <View style={styles.row}>
          <Text style={styles.inputText}>{phone}</Text>
          <Icon
            style={styles.icon}
            name="arrow-forward-ios"
            size={20}
            color="#b2b3b3"
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EmailScreen', {
            email,
          });
        }}>
        <Text style={styles.inputTextTitle}>Email</Text>
        <View style={styles.row}>
          <Text style={styles.inputText}>{email}</Text>
          <Icon
            style={styles.icon}
            name="arrow-forward-ios"
            size={20}
            color="#b2b3b3"
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AboutScreen', {
            about,
          });
        }}>
        <Text style={styles.inputTextTitle}>Tell us about yourself</Text>
        <View style={styles.row}>
          <Text style={styles.inputText}>{about}</Text>
          <Icon
            style={styles.icon}
            name="arrow-forward-ios"
            size={20}
            color="#b2b3b3"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    textAlign: 'center',
    color: '#4169e1',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: -15,
  },
  inputTextTitle: {
    paddingTop: 10,
    paddingLeft: 5,
    fontWeight: 'bold',
    color: '#cacbcb',
  },
  inputText: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    paddingLeft: 20,
  },
  row: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingBottom: 15,
    borderBottom: 'solid',
    borderColor: '#ececec',
    borderBottomWidth: 2,
  },
  img: {
    borderRadius: 200,
    height: 140,
    width: 140,
    borderColor: '#4169e1',
    borderWidth: 5,
  },
  pencilContainer: {
    zIndex: 1,
    alignSelf: 'flex-end',
    top: 50,
    right: 140,
    backgroundColor: 'white',
    borderRadius: 200,
    height: 35,
    width: 35,
  },
  pencilIcon: {
    textAlign: 'center',
    padding: 6,
    color: '#4169e1',
  },
});
