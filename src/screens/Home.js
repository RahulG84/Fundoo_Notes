import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import UseDatabaseServices from '../services/UseDatabaseServices';
import NotesList from '../components/NoteList';

const Home = ({navigation}) => {
  const {fetchingNote, archiveList, pinnedList, unpinnedList} =
    UseDatabaseServices();

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      fetchingNote();
    });
    return unSubscribe;
  }, [navigation, fetchingNote]);

  return (
    <View style={styles.container}>
      <View style={styles.topAndBottom}>
        <TopBar />
      </View>
      <View style={styles.NoteList}>
        <NotesList
          navigation={navigation}
          archiveList={archiveList}
          pinnedList={pinnedList}
          unpinnedList={unpinnedList}
        />
      </View>
      <View style={styles.topAndBottom}>
        <BottomBar />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  topAndBottom: {
    flex: 0.1,
  },
  NoteList: {
    flex: 0.8,
    marginEnd: 10,
  },
});
export default Home;
