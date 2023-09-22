import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    backgroundColor: Colors.lighter,
  },
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
});

export default styles;
