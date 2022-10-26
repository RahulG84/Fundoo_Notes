import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import NotesTopBar from '../components/NotesTopBar';
import NotesBottomBar from '../components/NotesBottomBar';
import NotesInput from '../components/NotesInput';
import {useSelector} from 'react-redux';
import UseDatabaseServices from '../services/UseDatabaseServices';

const Notes = ({navigation}) => {
  const dataNotes = useRoute().params;
  const {savingToFireStore, updateNote} = UseDatabaseServices();

  const [title, setTitle] = useState(dataNotes?.Title || '');
  const [note, setNote] = useState(dataNotes?.Note || '');
  const [archive, setArchive] = useState(dataNotes?.Archive || false);
  const [del, setDel] = useState(dataNotes?.Delete || false);
  const [pin, setPin] = useState(dataNotes?.Pin || false);
  const [id, setId] = useState(dataNotes?.key || '');
  const {labelData} = useSelector(state => state.userReducer);

  const states = {
    title,
    note,
    setTitle,
    setNote,
    archive,
    setArchive,
    del,
    setDel,
    pin,
    setPin,
  };

  const onBackPress = async () => {
    if (id) {
      await updateNote(id, title, note, archive, del, pin, labelData);
      console.log(id);
    } else {
      await savingToFireStore(title, note, archive, del, pin);
    }
    navigation.goBack();
  };
  const handleDeleteOption = async () => {
    await updateNote(id, title, note, archive, pin);
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.NoteTopAndBottom}>
        <NotesTopBar onBackPress={onBackPress} states={states} />
      </View>
      <View style={styles.MainNote}>
        <NotesInput {...states} />
      </View>
      <View style={styles.bottomView}>
        <NotesBottomBar
          style={styles.NoteTopAndBottom}
          handleDeleteOption={handleDeleteOption}
          states={states}
        />
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
  NoteTopAndBottom: {
    flex: 0.1,
  },
  MainNote: {
    flex: 0.8,
  },
});

export default Notes;
