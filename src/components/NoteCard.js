import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {widthPercentage} from '../utility/CSS';

const NoteCard = ({item, navigation, gridView}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Notes', {...item});
      }}>
      <View
        style={[
          {width: gridView ? widthPercentage('43%') : null},
          styles.itemposts,
        ]}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.note}>{item.Note}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;
const styles = StyleSheet.create({
  itemposts: {
    backgroundColor: 'pink',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
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
});
