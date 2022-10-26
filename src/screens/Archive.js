import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ArchiveList from '../components/ArchiveList';
import UseDatabaseServices from '../services/UseDatabaseServices';
import ArchiveTopBar from '../components/ArchiveTopBar';

const Archive = () => {
  const navigation = useNavigation();
  const {archiveList, fetchingNote} = UseDatabaseServices();

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      fetchingNote();
    });
    return unSubscribe;
  }, [navigation, fetchingNote]);

  return (
    <View style={styles.container}>
      <ArchiveTopBar />
      <View style={styles.notes}>
        <ArchiveList navigation={navigation} archiveList={archiveList} />
      </View>
    </View>
  );
};

export default Archive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hewderFlex: {
    flex: 0.07,
  },
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    marginRight: 10,
    height: 50,
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '2.5%',
  },
  gridView: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  searchView: {
    marginRight: 10,
  },
  notes: {
    flex: 0.93,
    backgroundColor: 'white',
    paddingTop: 5,
    marginRight: 4,
  },
});

/* <View style={styles.hewderFlex}>
        <View style={styles.HeaderView}>
          <View style={styles.mainView}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={30} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.text}>Archive</Text>
          </View>
          <View style={styles.subView}>
            <TouchableOpacity style={styles.searchView}>
              <Ionicons name="search" color={'black'} size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="md-grid-outline"
                size={28}
                color={'black'}
                style={styles.gridView}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View> */
