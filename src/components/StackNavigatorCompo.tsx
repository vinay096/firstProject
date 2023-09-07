import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Button, Text} from 'react-native';
import Home from '../screens/Home';
import Login from '../screens/Login';

const NavigatorCompo = (props: any) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#8275FB'},
          headerTitleStyle: {
            fontSize: 30,
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'My Home'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerLeft: () => <Button title="Button" />,
            headerRight: () => <Text>Hello</Text>,
            headerStyle: {backgroundColor: '#FE84C5'},
            headerTitleStyle: {
              fontSize: 30,
            },
            headerTitleAlign: 'center',
            headerTintColor: '#125691',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorCompo;
