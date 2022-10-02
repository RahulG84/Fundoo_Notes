import * as React from 'react';
import {Text, View, StyleSheet, Image, StatusBar} from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View></View>
      <View>
        <Image
          style={styles.Logo}
          source={require('../assets/Image/LoginImage.jpeg')}
        />
        <Text style={styles.LogoTxt}>Fundoo Notes</Text>
      </View>
      <View style={styles.tetxButtom}>
        <Text style={styles.txt}>Made With Bridgelabz..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
  },
  Logo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 25,
  },
  LogoTxt: {
    color: 'blue',
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  tetxButtom: {
    marginBottom: 40,
  },
});
