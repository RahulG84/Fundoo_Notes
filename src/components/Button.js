import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, text, typeOfButton = 'PRIMARY'}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[`container_${typeOfButton}`]]}
      onPress={onPress}>
      <Text style={[styles.text, styles[`container_${typeOfButton}`]]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    paddingLeft: 20,
  },
  container_PRIMARY: {
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    marginLeft: 10,
    marginBottom: 10,
    paddingRight: 18,
    paddingTop: 3,
    paddingBottom: 1,
    fontSize: 18,
  },
  container_TERTIARY: {
    color: 'gray',
    marginVertical: -5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  text_TERTIARY: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Button;
