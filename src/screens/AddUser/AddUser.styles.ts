import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  textHeader: {
    fontSize: 28,
    color: Colors.darker,
    marginStart: 20,
    fontWeight: 'bold',
  },
  btnAddUser: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAddUser: {
    fontSize: 14,
    color: Colors.darker,
    marginEnd: 20,
  },
  btnSubmit: {
    width: 100,
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: '#5F9EA0',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 20,
  },
  textSubmit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.lighter,
  },
});

export default styles;
