import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setGridView} from '../../redux/Action';

const ArchiveTopBar = () => {
  const navigation = useNavigation();
  const {gridView} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.hewderFlex}>
      <View style={styles.HeaderView}>
        <View style={styles.mainView}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={35} color={'black'} />
          </TouchableOpacity>
          <Text style={styles.text}>Archive</Text>
        </View>
        <View style={styles.subView}>
          <TouchableOpacity style={styles.searchView}>
            <Ionicons name="search" color={'black'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(setGridView(!gridView))}>
            {gridView ? (
              <Ionicons
                name="reorder-two-outline"
                size={28}
                color={'black'}
                style={styles.gridView}
              />
            ) : (
              <Ionicons
                name="md-grid-outline"
                size={28}
                color={'black'}
                style={styles.gridView}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hewderFlex: {
    flex: 0.07,
    marginTop: 2,
  },
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    color: 'black',
    paddingLeft: 20,
    fontWeight: 'bold',
    paddingTop: -15,
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    marginRight: 10,
    height: 50,
    paddingTop: 5,
    marginTop: -3,
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

export default ArchiveTopBar;

// class ArchiveTopBar extends Component {
//   render() {
//     const navigation = useNavigation();
//     const {gridView} = useSelector(state => state.userReducer);
//     const dispatch = useDispatch();

//     return (
//       <View style={styles.hewderFlex}>
//         <View style={styles.HeaderView}>
//           <View style={styles.mainView}>
//             <TouchableOpacity onPress={() => navigation.openDrawer()}>
//               <Ionicons name="menu" size={35} color={'black'} />
//             </TouchableOpacity>
//             <Text style={styles.text}>Archive</Text>
//           </View>
//           <View style={styles.subView}>
//             <TouchableOpacity style={styles.searchView}>
//               <Ionicons name="search" color={'black'} size={30} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => dispatch(setGridView(!gridView))}>
//               {gridView ? (
//                 <Ionicons
//                   name="ist-sharp"
//                   size={28}
//                   color={'black'}
//                   style={styles.gridView}
//                 />
//               ) : (
//                 <Ionicons
//                   name="md-grid-outline"
//                   size={28}
//                   color={'black'}
//                   style={styles.gridView}
//                 />
//               )}
//               {/* <Ionicons
//                 name="md-grid-outline"
//                 size={28}
//                 color={'black'}
//                 style={styles.gridView}
//               /> */}
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
