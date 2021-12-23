import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSection: {
    borderColor: '#e0e0e0',
    border: 'solid',
    borderWidth: 2,
    minWidth: '48%',
  },
  label: {
    color: '#b3b4b4',
    marginBottom: -10,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 10,
  },
  textInput: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
  },
  button: {
    padding: 15,
    backgroundColor: 'black',
    marginVertical: 220,
  },
  aboutButton: {
    padding: 15,
    backgroundColor: 'black',
    marginVertical: 150,
  },
  img: {
    alignSelf: 'center',
    width: 300,
    height: 300,
  },
  choosePhotoBtn: {
    marginTop: 20,
    marginBottom: -200,
  },
});
