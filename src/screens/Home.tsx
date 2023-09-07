import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = (props: any) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Login"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};

export default Home;
