import {Text, View, TouchableOpacity} from 'react-native';

export const HelloWorld = () => {
    const f1=() => {
        console.log("Hello World");
        // setName("Paul");
    }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
          textAlign: 'center',
        }}>
        Hola Mundo
      </Text>
      <TouchableOpacity style={{
        position: 'absolute',
        bottom: 30
      }}
      onPress={f1}>
        <View
          style={{
            width: 100,
            height: 35,
            backgroundColor: 'blue',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center'
            }}>
            Agregar
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
