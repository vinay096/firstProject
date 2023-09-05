import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const GridDemo = () => {
  const userList = [
    {id: 1, name: 'sss'},
    {id: 2, name: 'sss'},
    {id: 3, name: 'sss'},
    {id: 4, name: 'sss'},
    {id: 5, name: 'sss'},
    {id: 6, name: 'sss'},
    {id: 7, name: 'sss'},
    {id: 8, name: 'sss'},
    {id: 9, name: 'sss'},
    {id: 10, name: 'sss'},
    {id: 11, name: 'sss'},
    {id: 12, name: 'sss'},
    {id: 13, name: 'sss'},
    {id: 14, name: 'sss'},
    {id: 15, name: 'sss'},
    {id: 16, name: 'sss'},
    {id: 17, name: 'sss'},
    {id: 18, name: 'sss'},
    {id: 19, name: 'sss'},
    {id: 20, name: 'sss'},
    {id: 21, name: 'sss'},
    {id: 22, name: 'sss'},
  ];
  return (
    <View>
      <Text style={{fontSize: 25}}>Grid Demo</Text>
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {userList.map(item => (
            <Text style={style.gridStyle}>{item.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  gridStyle: {
    color: 'blue',
    fontSize: 60,
    height: 200,
    textAlignVertical: 'center',
    backgroundColor: 'pink',
    marginRight: 10,
    marginBottom: 10,
  },
});
export default GridDemo;
