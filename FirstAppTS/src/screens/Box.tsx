import {Text, View, StyleSheet} from 'react-native';

export const Box = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textFirst}> Caja </Text>
      <Text style={styles.textSecond}>Hola Mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: 'red',
  },
  textFirst: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'green',
    marginVertical: 10,
  },
  textSecond: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'green',
    paddingVertical: 50,
    marginHorizontal: 50,
  },
});
