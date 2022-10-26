import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ModalPopup from './ModalPopup';
import {setGridView} from '../../redux/Action';
import {useSelector, useDispatch} from 'react-redux';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

const TopBar = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const {gridView} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const changeVisible = bool => {
    setVisible(bool);
  };
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <View style={styles.inputView}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={30} color={'black'} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Text style={styles.text}>Search your notes</Text>
            </TouchableOpacity>
          </View>

          <View style={{paddingLeft: 40}}>
            <TouchableOpacity onPress={() => dispatch(setGridView(!gridView))}>
              {gridView ? (
                <Ionicons
                  name="list-sharp"
                  size={28}
                  color={'black'}
                  style={{paddingLeft: 18}}
                />
              ) : (
                <Ionicons
                  name="md-grid-outline"
                  size={28}
                  color={'black'}
                  style={{paddingLeft: 18}}
                />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => changeVisible(true)}
              style={styles.button}>
              <Image
                source={require('../assets/Image/profile.jpeg')}
                style={styles.proStyle}
              />
            </TouchableOpacity>
            <Modal
              transparent={true}
              animationType="slide"
              visible={visible}
              onRequestClose={() => setVisible(false)}>
              <ModalPopup changeVisible={changeVisible} />
            </Modal>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 10,
    marginLeft: 6,
    marginRight: 6,
  },
  inputView: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#C0D1DA', //  Pastels & Neons Coated
    borderRadius: 25,
    padding: 12,
    opacity: 0.7,
  },
  text: {
    fontSize: 21,
    paddingLeft: 15,
    color: 'black',
  },

  button: {
    paddingRight: 20,
    paddingLeft: 15,
  },
  proStyle: {
    width: 30,
    height: 30,
    resizeMode: 'center',
    color: '#C0D1DA',
    borderRadius: 50,
  },
});

export default TopBar;
