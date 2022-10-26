import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import NoteCard from './NoteCard';
import {useSelector} from 'react-redux';

const ArchiveList = ({navigation, archiveList}) => {
  const {gridView} = useSelector(state => state.userReducer);
  let numCols = gridView ? 2 : 0;

  const renderItem = ({item}) => (
    <NoteCard navigation={navigation} item={item} gridView={gridView} />
  );

  return (
    <FlatList
      data={archiveList}
      numColumns={numCols}
      renderItem={renderItem}
      key={numCols}
    />
  );
};

// class ArchiveList extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.props.archiveList}
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

// const ArchiveList = ({archiveList, navigation}) => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={archiveList}
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
// const ArchiveList = ({navigation, archiveList}) => {
//   const renderItem = ({item}) => (
//     <NoteCard navigation={navigation} item={item} />
//   );

//   return <FlatList data={archiveList} renderItem={renderItem} />;
// };

// class ArchiveList extends Component {
//   constructor() {}
//   render() {
//     const {gridView} = useSelector(state => state.userReducer);
//     let numCols = gridView ? 2 : 0;
//     const renderItem = ({item}) => (
//       <NoteCard
//         navigation={this.props.navigation}
//         item={item}
//         gridView={gridView}
//       />
//     );
//     return (
//       <FlatList
//         data={this.props.archiveList}
//         numColumns={numCols}
//         renderItem={renderItem}
//         key={numCols}
//       />
//     );
//   }
// }

const styles = StyleSheet.create({});

export default ArchiveList;
