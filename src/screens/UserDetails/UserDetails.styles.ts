import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    backgroundColor: Colors.lighter,
  },
  viewUserItem: {
    marginHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImagePlaceHolder: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    backgroundColor: Colors.darker,
    marginEnd: 12,
  },
  textName: {
    color: Colors.darker,
    textAlign: 'center',
  },
  textPlaceholder: {
    color: Colors.lighter,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 35,
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
  viewDetails: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
