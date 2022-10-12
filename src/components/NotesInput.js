import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const NotesInput = props => {
  return (
    <View>
      <TextInput
        style={styles.titleText}
        placeholder="Title"
        value={props.title}
        onChangeText={value => props.setTitle(value)}
      />
      <TextInput
        style={styles.noteText}
        placeholder="Note"
        multiline={true}
        value={props.note}
        onChangeText={value => props.setNote(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    paddingTop: 30,
    padding: 20,
    fontSize: 30,
    color: 'black',
    marginBottom: -17,
    marginTop: 30,
  },
  noteText: {
    padding: 20,
    fontSize: 20,
    color: 'black',
  },
});

export default NotesInput;
