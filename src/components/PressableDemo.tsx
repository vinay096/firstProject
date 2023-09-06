import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';

const PressableDemo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState('');

  const increase = () => setCount(count + 1);
  const longPress = () => setShow('Long Pressed');

  const pressIn = () => console.warn('Press In');
  const pressOut = () => {
    console.warn('Press Out');
  };

  const reset = () => {
    setCount(0);
    setShow('');
  };
  return (
    <View>
      <View style={styles.reset}>
        <Button title="Reset" onPress={reset} />
      </View>
      <Text style={styles.countSty}>Single Click: {count}</Text>
      <Text style={styles.countSty}>{show}</Text>
      <Pressable
        style={({pressed}) => [
          styles.box,
          pressed && {opacity: 0.5, backgroundColor: 'skyblue'},
        ]}
        onPress={increase}
        onLongPress={longPress}
        onPressIn={pressIn}
        onPressOut={pressOut}>
        <Text style={styles.text}>Pressable Button</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    marginBottom: 10,
    height: 40,
    borderRadius: 20,
    padding: 5,
    margin: 10,
    paddingLeft: 20,
  },
  text: {fontSize: 20, color: 'white'},
  countSty: {
    fontSize: 30,
  },
  reset: {
    alignSelf: 'flex-end',
  },
});
export default PressableDemo;
