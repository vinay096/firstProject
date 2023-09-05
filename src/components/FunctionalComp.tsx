import React from 'react';
import {Button, Text, View} from 'react-native';

const FunctionalComp = () => {
  // calling non-parameterized function
  const myFunt = () => {
    console.warn('Pressed Event');
  };

  // calling parameterized function

  const paraFunct = (parameter: string) => {
    console.warn(parameter);
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>Calling functions on button press </Text>
      <Button title="Press Here" color="blue" onPress={myFunt} />
      <Text>============================</Text>
      <Button
        title="Press It"
        color="blue"
        onPress={() => {
          paraFunct('parametrized function');
        }}
      />
    </View>
  );
};

export default FunctionalComp;
