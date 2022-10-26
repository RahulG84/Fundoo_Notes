import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import NoteCard from './NoteCard';

class Deletelist extends Component {
  render() {
    const renderItem = ({item}) => (
      <NoteCard navigation={this.props.navigation} item={item} />
    );
    return <FlatList data={this.props.deleteList} renderItem={renderItem} />;
  }
}

const styles = StyleSheet.create({});

export default Deletelist;
