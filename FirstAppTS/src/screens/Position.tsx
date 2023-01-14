import {Text, View, StyleSheet} from 'react-native';

export const Position = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textFirst}> 1 </Text>
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
    //marginHorizontal: 50,
    position: 'absolute',
    bottom: 0,
  },
});
