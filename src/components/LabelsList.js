import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import UseLablesDataBase from '../services/UseLablesDataBase';
import LabelsListCard from './LabelsListCard';
import {useRoute} from '@react-navigation/native';

const LabelsList = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const [filterLabelData, setFilterLabelData] = useState([]);
  const [labelVisible, setLabelVisibile] = useState(false);

  const {savingLablesData, fetchLabelData} = UseLablesDataBase();
  const {labelData} = useSelector(state => state.userReducer);

  const lableId = useRoute().params;
  const [selectedLabels, setSelectedLabels] = useState(lableId ?? []);

  useEffect(() => {
    fetchLabelData();
  }, []);

  const OnChangeTextHandler = text => {
    setValue(text);
    let filterLabel = labelData.filter(label =>
      label.labelName.toLowerCase().includes(text.toLowerCase()),
    );
    setFilterLabelData(filterLabel);
  };

  console.log('selectedLabels', selectedLabels);

  return (
    <View>
      <View style={Styles.mainView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notes', {
              labelData: selectedLabels,
            });
          }}>
          <Ionicons name="ios-arrow-back-outline" size={25} color={'black'} />
        </TouchableOpacity>
        <TextInput
          style={Styles.textInput}
          value={value}
          placeholder="Enter Label Name"
          placeholderTextColor={'gray'}
          onChangeText={text => {
            OnChangeTextHandler(text);
            setLabelVisibile(true);
          }}
          onBlur={() => {
            setLabelVisibile(false);
            setValue('');
          }}
        />
      </View>
      {labelVisible ? (
        filterLabelData.length > 0 ? (
          <FlatList
            data={filterLabelData}
            keyExtractor={item => item.key}
            renderItem={({item}) => (
              <LabelsListCard item={item} isCheckBox={true} />
            )}
          />
        ) : (
          <TouchableOpacity
            style={Styles.subView}
            onPress={async () => {
              await savingLablesData(value);
              fetchLabelData();
              setLabelVisibile(false);
            }}>
            <Ionicons
              style={Styles.icon}
              name={'add-sharp'}
              size={25}
              color={'black'}
            />
            <Text style={Styles.createText}> Create</Text>
            <Text style={Styles.ValueText}>"{value}"</Text>
          </TouchableOpacity>
        )
      ) : (
        <FlatList
          data={labelData}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <LabelsListCard
              item={item}
              selectedLabels={selectedLabels}
              setSelectedLabels={setSelectedLabels}
              lableId={lableId}
            />
          )}
        />
      )}
    </View>
  );
};

export default LabelsList;

const Styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  mainView: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  subView: {
    marginLeft: '15%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ValueText: {
    fontSize: 18,
    color: 'black',
    marginLeft: '2%',
    fontWeight: 'bold',
  },
  createText: {
    color: 'black',
    marginLeft: '2%',
  },
});
//   onPressIn={() => {
//     // OnChangeTextHandler(value);
//   }}
