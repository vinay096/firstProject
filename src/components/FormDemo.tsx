import React, {useState} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import extStyle from '../common/extStyle';

const FormDemo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  function handleClear() {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  }
  return (
    <View>
      <Text style={{fontSize: 30}}>Form Demo</Text>
      {display && (
        <View>
          <Text style={{fontSize: 20, color: 'blue', textAlign: 'center'}}>
            Name- {name}
          </Text>
          <Text style={{fontSize: 20, color: 'blue', textAlign: 'center'}}>
            Email- {email}
          </Text>
          <Text style={{fontSize: 20, color: 'blue', textAlign: 'center'}}>
            Password- {password}
          </Text>
        </View>
      )}
      <ScrollView>
        <TextInput
          style={extStyle.inputTextStyle}
          placeholder="Entre Name"
          value={name}
          onChangeText={text => {
            setName(text);
          }}
        />
        <TextInput
          style={extStyle.inputTextStyle}
          placeholder="Entre Email"
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <TextInput
          style={extStyle.inputTextStyle}
          placeholder="Entre Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => {
            setPassword(text);
          }}
        />

        <View style={{marginBottom: 10}}>
          <Button
            title="Print Details"
            onPress={() => {
              setDisplay(true);
            }}
          />
        </View>

        <Button title="Clear All" onPress={handleClear} />
      </ScrollView>
    </View>
  );
};

export default FormDemo;
