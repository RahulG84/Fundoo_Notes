import React, {useContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvide';

const dataCollection = firestore().collection('NotesData');

const UseDatabaseServices = () => {
  const {user} = useContext(AuthContext);

  const [notesList, setNotesList] = useState([]);

  const savingToFireStore = async (title, note) => {
    try {
      if (title !== '' || note !== '') {
        await dataCollection.doc(user.uid).collection('Notes').add({
          Title: title,
          Note: note,
        });
        console.log('Notes Created Successfully');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchingNote = async () => {
    let notesData = [];

    try {
      const list = await dataCollection.doc(user.uid).collection('Notes').get();
      list.forEach(doc => {
        const data = doc.data();
        data.key = doc.id;
        notesData.push(data);
      });
    } catch (error) {
      console.log(error);
    }
    setNotesList(notesData);
    console.log('*******', notesList);
  };

  return {
    savingToFireStore,
    fetchingNote,
    notesList,
  };
};

export default UseDatabaseServices;
