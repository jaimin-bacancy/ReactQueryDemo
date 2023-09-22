import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  inputContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 4,
  },
  viewCustomTextInput: {
    marginHorizontal: 20,
    marginVertical: 8,
  },
  textLabel: {
    color: Colors.darker,
  },
  input: {
    paddingVertical: 0,
    color: Colors.darker,
  },
});

export default styles;
