// posting variable data to API using POST method

import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import extStyle from '../../Style/extStyle';

interface User {
  name: string;
  email: string;
  age: string;
}

const PostAPITAkeInput = () => {
  const [data, setData] = useState<User>({name: '', email: '', age: ''});

  const saveData = async () => {
    const newUser: User = {
      name: data.name,
      email: data.email,
      age: data.age,
    };
    const url = 'http://10.0.2.2:3000/users';
    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser),
    });
    const result = await res.json();
    console.warn(result);
    setData({name: '', email: '', age: ''});
  };
  return (
    <View>
      <Text>Post API variable Input</Text>
      <Text>Name</Text>
      <TextInput
        style={extStyle.inputTextStyle}
        placeholder="Name"
        value={data.name}
        onChangeText={text => setData({...data, name: text})}
      />
      <Text>Email</Text>
      <TextInput
        style={extStyle.inputTextStyle}
        placeholder="Email"
        value={data.email}
        onChangeText={text => setData({...data, email: text})}
      />
      <Text>Age</Text>
      <TextInput
        style={extStyle.inputTextStyle}
        placeholder="Age"
        value={data.age}
        onChangeText={text => setData({...data, age: text})}
        keyboardType="numeric"
      />
      <Button title="Save Data" onPress={saveData} />
    </View>
  );
};

export default PostAPITAkeInput;
