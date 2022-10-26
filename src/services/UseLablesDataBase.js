import React, {useContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
// import {AuthContext} from '../navigations/AuthProvide';
import {AuthContext} from '../navigation/AuthProvide';
import {useDispatch} from 'react-redux';
import {fetchLabels} from '../../redux/Action';

const lableCollection = firestore().collection('NotesData');

const UseLablesDataBase = () => {
  <></>;
  const {user} = useContext(AuthContext);
  const [labelList, setLabelList] = useState([]);
  const dispatch = useDispatch();

  const savingLablesData = async labelName => {
    if (labelName !== '') {
      try {
        await lableCollection.doc(user.uid).collection('labels').add({
          labelName: labelName,
        });
        console.log('data stored');
      } catch (error) {
        console.log('error....', error);
      }
    }
  };

  const fetchLabelData = async () => {
    let labelData = [];
    let list = await lableCollection.doc(user.uid).collection('labels').get();
    list.forEach(doc => {
      const data = doc.data();
      data.key = doc.id;
      labelData.push(data);
    });
    setLabelList(labelData);

    dispatch(fetchLabels(labelData));
    return labelData;
  };

  return {
    savingLablesData,
    fetchLabelData,
    labelList,
  };
};

export default UseLablesDataBase;
