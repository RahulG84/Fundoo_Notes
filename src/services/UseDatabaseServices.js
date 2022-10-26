import React, {useContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvide';

const dataCollection = firestore().collection('NotesData');

const UseDatabaseServices = () => {
  <></>;
  const {user} = useContext(AuthContext);

  const [notesList, setNotesList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [deleteList, setDeleteList] = useState([]);
  const [pinnedList, setPinnedList] = useState([]);
  const [unpinnedList, setunpinnedList] = useState([]);

  const savingToFireStore = async (title, note, archive, del, pin) => {
    try {
      if (title !== '' || note !== '') {
        await dataCollection.doc(user.uid).collection('Notes').add({
          Title: title,
          Note: note,
          Archive: archive,
          Delete: del,
          Pin: pin,
        });
        console.log('Notes Created Successfully');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchingNote = async () => {
    let notesData = [];
    let archiveData = [];
    let deleteData = [];
    let pinnedArray = [];
    let unpinnedArray = [];

    try {
      const list = await dataCollection.doc(user.uid).collection('Notes').get();
      list.forEach(doc => {
        const data = doc.data();
        data.key = doc.id;
        notesData.push(data);

        if (data.Delete) {
          deleteData.push(data);
        } else if (data.Pin && !data.Archive && !data.Delete) {
          pinnedArray.push(data);
        } else if (!data.Pin && !data.Archive && !data.Delete) {
          unpinnedArray.push(data);
        } else {
          archiveData.push(data);
        }
      });
    } catch (e) {
      console.log(e);
    }
    setNotesList(notesData);
    setArchiveList(archiveData);
    setDeleteList(deleteData);
    setPinnedList(pinnedArray);
    setunpinnedList(unpinnedArray);
    console.log('*******', notesList);
  };

  const updateNote = async (id, title, note, archive, del, pin) => {
    try {
      await dataCollection.doc(user.uid).collection('Notes').doc(id).update({
        Title: title,
        Note: note,
        Archive: archive,
        Delete: del,
        Pin: pin,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    savingToFireStore,
    fetchingNote,
    notesList,
    updateNote,
    archiveList,
    deleteList,
    pinnedList,
    unpinnedList,
  };
};

export default UseDatabaseServices;
