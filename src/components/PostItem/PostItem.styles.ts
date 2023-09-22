import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  viewPostItem: {
    marginHorizontal: 20,
    backgroundColor: Colors.light,
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
  },
  textPostTitle: { fontSize: 18, color: Colors.darker },
  textBody: {
    fontSize: 14,
    color: Colors.dark,
    marginTop: 4,
  },
});

export default styles;
