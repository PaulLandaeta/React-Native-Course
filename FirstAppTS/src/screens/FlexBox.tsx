import {Text, View, StyleSheet} from 'react-native';

export const FlexBox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textFirst}></View>
        <View style={styles.textFirst}></View>
        <View style={styles.textFirst}></View>
      </View>
      <View style={styles.containerSecond}>
        <View style={styles.textFirst}></View>
        <View style={styles.textSecond}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    //justifyContent: 'center',
    backgroundColor: 'red',
    //justifyContent: 'center',
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-between',
    justifyContent: 'space-around',
    // alignItems: 'center',
    alignItems: 'stretch',
  },
  containerSecond: {
    flex: 2,
    //justifyContent: 'center',
    backgroundColor: 'yellow',
    flexDirection: 'row-reverse',
    //justifyContent: 'center',
    //justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-between',
    justifyContent: 'space-around',
    // alignItems: 'center',
    //alignItems: 'flex-start',
    // alignItems: 'flex-end',
    alignItems: 'stretch',
  },
  textFirst: {
    fontSize: 50,
    width: 100,
    height: 100,
    textAlign: 'center',
    backgroundColor: 'green',
    marginVertical: 10,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  textSecond: {
    fontSize: 50,
    backgroundColor: 'red',
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
