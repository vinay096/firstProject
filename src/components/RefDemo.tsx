import React, {useRef, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import extStyle from '../styles/extStyle';

const RefDemo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reference = useRef();

  const changeFocus = () => {
    reference.current.focus(); //it will change focus from any TextInput to this current TextInput box.
    reference.current.setNativeProps({
      fontSize: 25,
      color: 'green',
    });
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>useRef Demo</Text>

      <TextInput
        ref={reference}
        style={extStyle.inputTextStyle}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => {
          setName(text);
        }}
      />
      <TextInput
        style={extStyle.inputTextStyle}
        placeholder="Enter Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <TextInput
        style={extStyle.inputTextStyle}
        placeholder="Enter Password"
        value={password}
        secureTextEntry={true}
        onChangeText={text => {
          setPassword(text);
        }}
      />

      <View style={{marginBottom: 10}}></View>

      <Button title="change focus/color/fontsize" onPress={changeFocus} />
    </View>
  );
};

export default RefDemo;
