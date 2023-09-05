import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const CustomListDemo = () => {
  const userList = [
    {id: 1, name: 'ravi'},
    {id: 2, name: 'megha'},
    {id: 3, name: 'parth'},
    {id: 4, name: 'aaa'},
    {id: 5, name: 'bbbb'},
    {id: 6, name: 'ccc'},
    {id: 7, name: 'ddd'},
    {id: 8, name: 'eee'},
    {id: 9, name: 'fff'},
    {id: 10, name: 'ggg'},
    {id: 11, name: 'hhh'},
    {id: 12, name: 'iii'},
    {id: 13, name: 'jjj'},
    {id: 14, name: 'kkk'},
    {id: 15, name: 'llll'},
    {id: 16, name: 'mmmm'},
    {id: 17, name: 'nnnn'},
    {id: 18, name: 'nnn'},
    {id: 19, name: 'oooo'},
    {id: 20, name: 'pppp'},
    {id: 21, name: 'qqqq'},
    {id: 22, name: 'rrrr'},
  ];
  return (
    <View>
      <Text style={{fontSize: 25}}>Custom List Demo</Text>
      <ScrollView>
        {userList.map(item => (
          <Text
            style={{
              fontSize: 20,
              color: 'pink',
              backgroundColor: 'blue',
              marginBottom: 10,
              height: 40,
            }}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default CustomListDemo;
