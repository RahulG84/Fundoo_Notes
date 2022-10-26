import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LabelsListCard = ({item, selectedLabels, setSelectedLabels}) => {
  const [checkBox, setCheckBox] = useState(
    selectedLabels?.includes(item.key) ? true : false,
  );

  const onPressHandler = item => {
    if (selectedLabels.includes(item.key)) {
      const newselectedLabels = selectedLabels.filter(key => key !== item.key);
      setSelectedLabels(newselectedLabels);
    } else {
      setSelectedLabels([...selectedLabels, item.key]);
    }
  };

  return (
    <View style={Styles.mainView}>
      <TouchableOpacity
        onPress={() => {
          setCheckBox(!checkBox);
        }}
        style={Styles.rowStyle}>
        <Ionicons name={'md-pricetag-outline'} size={25} color={'black'} />
        <Text style={Styles.textName}>{item.labelName}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCheckBox(!checkBox);
          onPressHandler(item);
        }}>
        <Ionicons
          name={checkBox ? 'checkbox-sharp' : 'ios-stop-outline'}
          size={25}
          color={'black'}
        />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  mainView: {
    marginLeft: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2%',
    justifyContent: 'space-between',
    marginRight: '5%',
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
  },
  textName: {
    fontSize: 17,
    color: 'black',
    marginLeft: '15%',
  },
});

export default LabelsListCard;

// console.log('selectedLabels', selectedLabels);
// console.log('selectedLabels', selectedLabels);
