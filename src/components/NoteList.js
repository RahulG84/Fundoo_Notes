import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const NotesList = ({notesList}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {notesList.map(item => (
          <View style={styles.itemposts}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.note}>{item.Note}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    marginLeft: 8,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  note: {
    fontSize: 18,
    color: 'black',
    paddingLeft: 5,
  },
  itemposts: {
    backgroundColor: 'pink',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default NotesList;
