import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NotesBottomBar = () => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={{marginLeft: 20}} onPress={() => {}}>
        <Ionicons name="add-circle-outline" size={28} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft: 30}} onPress={() => {}}>
        <Ionicons name="ios-color-palette-outline" size={28} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft: 240}} onPress={() => {}}>
        <Ionicons name="ios-ellipsis-vertical" size={28} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: 395,
    marginLeft: 20,
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
});

export default NotesBottomBar;
