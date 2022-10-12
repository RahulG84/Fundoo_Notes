import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import NotesTopBar from '../components/NotesTopBar';
import NotesBottomBar from '../components/NotesBottomBar';
import NotesInput from '../components/NotesInput';
import UseDatabaseServices from '../services/UseDatabaseServices';

const Notes = ({navigation}) => {
  const dataNotes = useRoute().params;
  const {savingToFireStore} = UseDatabaseServices();

  const [title, setTitle] = useState(dataNotes?.Title || '');
  const [note, setNote] = useState(dataNotes?.Note || '');

  const states = {
    title,
    note,
    setTitle,
    setNote,
  };

  const onBackPress = async () => {
    await savingToFireStore(title, note);
    navigation.goBack();
  };

  return (
    <View style={styles.mainView}>
      <View style={{flex: 0.1}}>
        <NotesTopBar onBackPress={onBackPress} />
      </View>
      <View style={{flex: 0.8}}>
        <NotesInput {...states} />
      </View>
      <View style={styles.bottomView}>
        <NotesBottomBar style={{flex: 0.1}} />
      </View>
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

export default Notes;
