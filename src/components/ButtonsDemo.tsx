import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const ButtonsDemo = () => {
  const userList = [
    {id: 1, name: 'apple'},
    {id: 2, name: 'orange'},
    {id: 3, name: 'mango'},
    {id: 4, name: 'banana'},
  ];
  const itemList = [
    {id: 1, name: 'Java'},
    {id: 2, name: 'Python'},
    {id: 3, name: 'Rust'},
    {id: 4, name: 'Javascript'},
  ];

  const pressEvent = (fruit: string) => {
    // console.warn(fruit);
  };

  const handlePress = (lang: string) => {
    // Alert.alert(lang);
  };
  return (
    <View>
      <View>
        <Text style={{fontSize: 25}}>TouchableOpacity Demo</Text>
        {userList.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.touch}
              key={item.id}
              onPress={() => pressEvent(item.name)}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View>
        <Text style={{fontSize: 25}}>TouchableHighlight Demo</Text>
        {itemList.map(item => {
          return (
            <TouchableHighlight
              underlayColor={'pink'}
              style={styles.touch}
              key={item.id}
              onPress={() => handlePress(item.name)}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touch: {
    backgroundColor: 'blue',
    marginBottom: 10,
    height: 40,
    borderRadius: 20,
    padding: 5,
    margin: 10,
    paddingLeft: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default ButtonsDemo;
