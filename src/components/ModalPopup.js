import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import profile1 from '../assets/Image/profile.jpeg';

const ModalPopup = props => {
  const [profile, setProfile] = useState(profile1);
  const [visiblePopup, setVisiblePopup] = useState(false);

  const selectFromCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then(img => {
      setProfile(img.path);
    });
  };
  const selectFromGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(img => {
      setProfile(img.path);
    });
  };

  const closePopup = bool => {
    props.changeVisible(bool);
  };

  const openPopup = () => {
    setVisiblePopup(true);
  };

  return (
    <TouchableOpacity style={styles.touchable}>
      <View style={styles.viewContainer}>
        <View style={{marginLeft: 280, paddingTop: 8}}>
          <TouchableOpacity onPress={() => closePopup(false)}>
            <Ionicons name="close-outline" size={28} color={'black'} />
          </TouchableOpacity>
        </View>
        <View>
          <ImageBackground style={styles.profile} source={profile}>
            <View>
              <TouchableOpacity onPress={() => openPopup()}>
                <Ionicons
                  name="ios-camera-outline"
                  size={40}
                  color={'black'}
                  style={styles.camera}
                />
              </TouchableOpacity>
              <View style={{paddingTop: 10}}>
                <TouchableOpacity
                  onPress={() => closePopup(false)}
                  style={styles.saveText}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
              <Modal
                transparent={true}
                visible={visiblePopup}
                onRequestClose={() => setVisiblePopup(false)}>
                <TouchableOpacity style={styles.touchable}>
                  <View style={styles.viewContainer}>
                    <Text style={styles.textpop}>Select Profile Photo</Text>
                    <TouchableOpacity
                      style={{flexDirection: 'row'}}
                      onPress={selectFromCamera}>
                      <Text style={styles.Lib}>Open Camera</Text>
                      <Ionicons
                        name="md-camera-outline"
                        size={28}
                        color={'#A52A2A'}
                        style={{paddingTop: 16}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{flexDirection: 'row'}}
                      onPress={selectFromGallery}>
                      <Text style={styles.Phto}>Open Gallery</Text>
                      <Ionicons
                        name="md-image-outline"
                        size={28}
                        color={'#800080'}
                        style={{paddingTop: 16}}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </Modal>
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: 350,
    height: 200,
    marginTop: 8,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    elevation: 20,
    padding: 10,
    borderRadius: 4,
  },
  touchable: {
    paddingTop: 90,
    flex: 1,
    alignItems: 'center',
  },
  profile: {
    height: 150,
    width: 130,
    paddingTop: 60,
    paddingLeft: 50,
    marginLeft: 100,
    marginTop: -40,
  },
  camera: {
    borderRadius: 10,
    marginTop: 12,
    marginLeft: 30,
  },
  textpop: {
    fontSize: 20,
    color: 'gray',
    padding: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#696969',
  },
  Lib: {
    fontSize: 20,
    padding: 15,
    fontWeight: 'blod',
    color: '#A52A2A',
  },
  Phto: {
    fontSize: 20,
    padding: 15,
    fontWeight: 'blod',
    color: '#800080',
  },
  saveText: {
    width: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    marginLeft: -35,
    borderRadius: 8,
  },
});

export default ModalPopup;
