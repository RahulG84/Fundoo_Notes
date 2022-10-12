import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NotesTopBar = ({onBackPress}) => {
  return (
    <View style={styles.viewHeader}>
      <TouchableOpacity onPress={onBackPress}>
        <Ionicons name="arrow-back-outline" size={30} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} style={styles.CrossIcon}>
        <Ionicons name="pin-outline" size={26} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.Icon} onPress={() => {}}>
        <Ionicons name="notifications-outline" size={26} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} style={styles.Icon}>
        <Ionicons name={'archive-outline'} size={26} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {padding: 10, paddingTop: 20, flex: 0.1},
  viewHeader: {
    height: 50,
    flexDirection: 'row',
  },
  Icon: {marginLeft: 11, padding: 6},
  CrossIcon: {marginLeft: 210, padding: 6},
  titleText: {
    padding: 20,
    fontSize: 30,
    color: 'black',
    marginBottom: -17,
  },
  noteText: {
    padding: 20,
    fontSize: 20,
    color: 'black',
  },
  bottomView: {
    flex: 0.1,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -700,
  },
});

export default NotesTopBar;
