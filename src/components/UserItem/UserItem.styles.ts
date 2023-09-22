import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  viewUserItem: {
    marginHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewImagePlaceHolder: {
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: Colors.darker,
    marginEnd: 12,
  },
  textName: {
    color: Colors.darker,
  },
  textPlaceholder: {
    color: Colors.lighter,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default styles;
