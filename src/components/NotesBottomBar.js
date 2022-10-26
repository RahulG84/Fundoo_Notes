import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {heightPercentage, widthPercentage} from '../utility/CSS';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const NotesBottomBar = ({handleDeleteOption, states}) => {
  const navigation = useNavigation();
  const controlDeleteButton = () => {
    states.setDel(!states.del);
    handleDeleteOption();
    bs.current.snapTo(1);
  };

  let bs = React.createRef();
  let fall = new Animated.Value(1);

  const renderInner = () => (
    <View style={styles.bottomContainer}>
      {/* <View style={{marginLeft: 320, paddingTop: 5}}>
        <TouchableOpacity>
          <Ionicons
            name="ios-close-outline"
            style={{height: 20, width: 20}}
            color={'black'}
            size={25}
          />
        </TouchableOpacity>
      </View> */}
      <View style={styles.deleteView}>
        <TouchableOpacity onPress={controlDeleteButton}>
          <View style={styles.deleteIconView}>
            <Ionicons name="trash-outline" color={'black'} size={25} />
            <Text style={styles.text}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.labelView}>
        <TouchableOpacity onPress={() => navigation.navigate('LabelsList')}>
          <View style={styles.deleteIconView}>
            <Ionicons
              name="md-pricetag-outline"
              size={22}
              color={'black'}
              style={{padding: 8}}
            />
            <Text style={styles.text}>Label</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderHeader = () => (
    <View styles={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginLeft: 20}} onPress={() => {}}>
          <Ionicons name="add-circle-outline" size={28} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity style={{marginLeft: 30}} onPress={() => {}}>
          <Ionicons
            name="ios-color-palette-outline"
            size={28}
            color={'black'}
          />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center'}}></View>
      <TouchableOpacity
        style={{marginLeft: 247}}
        onPress={() => bs.current.snapTo(0)}>
        <Ionicons name="ellipsis-vertical" size={25} color={'#2f4f4f'} />
      </TouchableOpacity>
      <BottomSheet
        ref={bs}
        snapPoints={[150, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
    </View>
  );
};

export default NotesBottomBar;

const styles = StyleSheet.create({
  container: {
    padding: heightPercentage('0.001%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    width: '120%',
    height: heightPercentage('20%'),
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 5,
  },
  deleteView: {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: -15,
    paddingTop: 10,
  },
  labelView: {
    flexDirection: 'row',
    flex: 1,
    marginTop: heightPercentage('-5%'),
  },
  deleteIconView: {
    flex: 1,
    margin: widthPercentage('3%'),
    flexDirection: 'row',
    paddingBottom: -10,
  },
  labelMargin: {
    backgroundColor: '#fff',
    width: '100%',
    height: heightPercentage('2%'),
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    color: 'black',
    paddingLeft: widthPercentage('5%'),
  },

  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  panelHeader: {
    alignItems: 'center',
  },

  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
});
