import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import User from './User';

const CustomCompoFlatList = () => {
  const userList = [
    {id: 1, name: 'hari', email: 'hari@gmail.com'},
    {id: 2, name: 'maria', email: 'maria@gmail.com'},
    {id: 3, name: 'lucy', email: 'lucy@gmail.com'},
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Custom Compo with FlatList</Text>
      <FlatList data={userList} renderItem={({item}) => <User item={item} />} />
    </View>
  );
};

export default CustomCompoFlatList;
