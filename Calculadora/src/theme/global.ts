import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  app: {
    backgroundColor: 'black',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  result: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    paddingRight: 20,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginHorizontal: 24,
    marginVertical: 10,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  previous : {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'gray',
    paddingRight: 20,
    textAlign: 'right',
  }
});
