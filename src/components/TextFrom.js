import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const TextFrom = ({value, setValue, placeholder, secureTextEntry, error}) => {
  return (
    <View>
      <TextInput
        style={styles.cutumStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={{color: 'red', paddingLeft: 20}}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  cutumStyle: {
    backgroundColor: 'white',
    width: 350,
    height: 50,
    marginVertical: 8,
    marginHorizontal: 20,
    paddingLeft: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
  },
});

export default TextFrom;
