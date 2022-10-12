import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem as DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../navigation/AuthProvide';

const DrawerContainer = props => {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);
  return (
    <DrawerContentScrollView props={props}>
      <View style={styles.mainView}>
        <Text style={styles.mainText}>Fundoo Notes</Text>
      </View>
      <View style={{flex: 1, paddingTop: 15}}>
        <DrawerItemList
          icon={({color}) => (
            <Ionicons name="bulb-outline" color={color} size={25} />
          )}
          label={() => <Text style={styles.textView}>Notes</Text>}
          onPress={() => navigation.navigate('Home')}
        />

        <DrawerItemList
          icon={({color}) => (
            <Ionicons name="md-notifications-outline" color={color} size={25} />
          )}
          label={() => <Text style={styles.textView}>Reminders</Text>}
          onPress={() => navigation.navigate('Reminders')}
        />
        <View style={{borderBottomWidth: 1, borderColor: 'yellow'}}></View>

        <DrawerItemList
          icon={({color}) => (
            <Ionicons name="add-outline" color={color} size={25} />
          )}
          label={() => <Text style={styles.textView}>Labels</Text>}
          onPress={() => navigation.navigate('Labels')}
        />
        <View style={{borderBottomWidth: 1, borderColor: 'yellow'}}></View>

        <DrawerItemList
          icon={({color}) => (
            <Ionicons name="archive" color={color} size={25} />
          )}
          label={() => <Text style={styles.textView}>Archive</Text>}
          onPress={() => navigation.navigate('Archive')}
        />

        <DrawerItemList
          icon={({color}) => (
            <Ionicons name="trash-outline" color={color} size={25} />
          )}
          label={() => <Text style={styles.textView}>Deleted</Text>}
          onPress={() => navigation.navigate('Deleted')}
        />

        <DrawerItemList
          icon={({color}) => (
            <Ionicons name="ios-settings-outline" color={color} size={25} />
          )}
          label={() => <Text style={styles.textView}>Settings</Text>}
          onPress={() => navigation.navigate('Settings')}
        />
        <DrawerItemList
          icon={({color}) => (
            <Ionicons name="power-outline" color={color} size={25} />
          )}
          label={() => <Text style={styles.textView}>Logout</Text>}
          onPress={() => logout()}
        />
        <DrawerItemList
          icon={({color}) => (
            <Ionicons name="md-help-circle-outline" color={color} size={25} />
          )}
          label={() => <Text style={styles.textView}>Help & Feedback</Text>}
          onPress={() => {}}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  mainText: {
    fontSize: 32,
    fontFamily: 'arial',
    fontWeight: 'bold',
    color: '#f0f00f',
  },
  textView: {
    fontSize: 16,
    color: 'black',
    paddingBottom: 5,
  },
});

export default DrawerContainer;
