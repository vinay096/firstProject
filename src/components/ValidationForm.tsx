// posting variable data to API using POST method

import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import extStyle from '../styles/extStyle';

interface User {
  name: string;
  email: string;
  age: string;
  password: string;
}

const ValidationForm = () => {
  const [data, setData] = useState<User>({
    name: '',
    email: '',
    age: '',
    password: '',
  });
  const [cpassword, setCPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [cpasswordError, setCPasswordError] = useState(false);

  const saveData = () => {
    {
      data.name === '' ? setNameError(true) : setNameError(false);
    }
    {
      data.email === '' ? setEmailError(true) : setEmailError(false);
    }
    {
      data.age === '' ? setAgeError(true) : setAgeError(false);
    }
    {
      data.password === '' ? setPasswordError(true) : setPasswordError(false);
    }
    {
      cpassword !== data.password
        ? setCPasswordError(true)
        : setCPasswordError(false);
    }

    if (
      !data.name ||
      !data.email ||
      !data.age ||
      !data.password ||
      !(cpassword === data.password)
    ) {
      return false;
    }

    const newUser: User = {
      name: data.name,
      email: data.email,
      age: data.age,
      password: data.password,
    };

    console.warn(newUser);
    setData({name: '', email: '', age: '', password: ''});
    setCPassword('');
  };
  return (
    <ScrollView>
      <Text style={styles.main}>Form Validation</Text>
      <Text>Name</Text>
      <TextInput
        style={extStyle.inputTextStyle}
        placeholder="Name"
        value={data.name}
        onChangeText={text => setData({...data, name: text})}
      />
      {nameError ? (
        <Text style={styles.error}>Please enter your name</Text>
      ) : null}

      <Text>Email</Text>
      <TextInput
        style={extStyle.inputTextStyle}
        placeholder="Email"
        value={data.email}
        onChangeText={text => setData({...data, email: text})}
      />
      {emailError ? (
        <Text style={styles.error}>Please enter your email</Text>
      ) : null}

      <Text>Age</Text>
      <TextInput
        style={extStyle.inputTextStyle}
        placeholder="Age"
        value={data.age}
        onChangeText={text => setData({...data, age: text})}
        keyboardType="numeric"
      />
      {ageError ? (
        <Text style={styles.error}>Please enter your age</Text>
      ) : null}

      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={extStyle.inputTextStyle}
        placeholder="Enter Password"
        value={data.password}
        onChangeText={text => setData({...data, password: text})}
      />
      {passwordError ? (
        <Text style={styles.error}>please enter a password</Text>
      ) : null}

      <Text> Confirm Password</Text>
      <TextInput
        secureTextEntry={true}
        style={extStyle.inputTextStyle}
        placeholder="Confirm Password"
        value={cpassword}
        onChangeText={text => setCPassword(text)}
      />
      {cpasswordError ? (
        <Text style={styles.error}>password doesn't match</Text>
      ) : null}

      <Button title="Save Data" onPress={saveData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft: 10,
  },
  main: {
    fontSize: 30,
    textAlign: 'center',
  },
});
export default ValidationForm;
