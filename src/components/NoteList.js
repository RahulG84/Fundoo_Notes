import React from 'react';
import {FlatList, SectionList, View, StyleSheet} from 'react-native';
import NoteCard from './NoteCard';
import {useSelector} from 'react-redux';

const NotesList = ({navigation, unpinnedList, pinnedList}) => {
  const Pin_UnPin = [
    {title: 'Pinned', data: [{list: pinnedList}]},
    {title: 'Other', data: [{list: unpinnedList}]},
  ];

  const {gridView} = useSelector(state => state.userReducer);
  let numCols = gridView ? 2 : 0;

  const renderSectionList = ({item}) => {
    return (
      <View>
        <FlatList
          data={item.list}
          numColumns={numCols}
          renderItem={renderItem}
          key={numCols}
        />
        {/* <Text style={styles.titleView}>Others</Text> */}
      </View>
    );
  };

  const renderItem = ({item}) => {
    return <NoteCard item={item} navigation={navigation} gridView={gridView} />;
  };

  return (
    <View>
      {/* <Text style={styles.titleView}>Pinned</Text> */}
      <SectionList sections={Pin_UnPin} renderItem={renderSectionList} />
    </View>
  );
};
const styles = StyleSheet.create({
  titleView: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
    padding: 10,
  },
});

export default NotesList;

// class NotesList extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.props.notesList}
//           renderItem={({item}) => (
//             <TouchableOpacity
//               onPress={() => {
//                 this.props.navigation.navigate('Notes', {...item});
//               }}>
//               <View style={styles.itemposts}>
//                 <Text style={styles.title}>{item.Title}</Text>
//                 <Text style={styles.note}>{item.Note}</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     );
//   }
// }

// const NotesList = ({notesList, navigation, unpinnedList, pinnedList}) => {
//   const DATA_SECTIONS = [
//     {title: 'pinned', data: [{list: pinnedList}]},
//     {title: 'withoutPinned', data: [{list: unpinnedList}]},
//   ];
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={notesList.list}
//         renderItem={({item}) => (
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('Notes', {...item});
//             }}>
//             <View style={styles.itemposts}>
//               <Text style={styles.title}>{item.Title}</Text>
//               <Text style={styles.note}>{item.Note}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };
