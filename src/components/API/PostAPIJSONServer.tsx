// posting static data to API using POST method

import React from 'react';
import {Button, Text, View} from 'react-native';

const PostAPIJSONServer = () => {
  const saveData = async () => {
    const data = {
      name: 'kelly ',
      email: 'kelly@test.com',
      age: 30,
      id: 56,
    };
    const url = 'http://10.0.2.2:3000/users';
    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.warn(result);
  };
  return (
    <View>
      <Text>Post API JSON Server</Text>
      <Button title="Save Data" onPress={saveData} />
    </View>
  );
};

export default PostAPIJSONServer;
