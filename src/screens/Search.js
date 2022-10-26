import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UseDatabaseServices from '../services/UseDatabaseServices';

const Search = ({}) => {
  const navigation = useNavigation();
  const [result, setResult] = useState();
  const [searchData, setSearchData] = useState([]);

  const {notesList, fetchingNote} = UseDatabaseServices();

  useEffect(() => {
    fetchingNote();
  }, []);

  const onChangeSearchInput = values => {
    setResult(values);
    let list = notesList.filter(
      data =>
        (values && data.Title.toLowerCase().includes(values.toLowerCase())) ||
        (values && data.Note.toLowerCase().includes(values.toLowerCase())),
    );
    setSearchData(list);
  };

  return (
    <View style={Styles.mainView}>
      <View style={Styles.view}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            style={{marginLeft: 5}}
            name="arrow-back-outline"
            size={35}
            color={'black'}
          />
        </TouchableOpacity>
        <TextInput
          style={Styles.textBox}
          value={result}
          placeholder="Search Here"
          onChangeText={onChangeSearchInput}
        />
      </View>
      {searchData.length > 0 ? (
        <FlatList
          data={searchData}
          numColumns={1}
          keyExtractor={item => {
            return item.key;
          }}
          renderItem={({item}) => {
            return (
              <View style={Styles.itemposts}>
                <Text style={Styles.title}>{item.Title}</Text>
                <Text style={Styles.note}>{item.Note}</Text>
              </View>
            );
          }}
        />
      ) : null}
    </View>
  );
};

export default Search;

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    height: '10%',
    margin: '2.5%',
  },
  textBox: {
    fontSize: 20,
    borderWidth: 1.5,
    width: '83%',
    padding: 10,
    height: 45,
    margin: 10,
    borderRadius: 10,
  },
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
