import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../screens/BottomTabScreens/HomeTab';
import LoginTab from '../screens/BottomTabScreens/LoginTab';
import {Image, View} from 'react-native';

const BottomTabNavigatorCompo = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          component={HomeTab}
          name="HomeTab"
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={require('../assets/images/home.png')}
                    style={
                      focused
                        ? {width: 25, height: 25}
                        : {width: 25, height: 25, tintColor: 'grey'}
                    }
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          component={LoginTab}
          name="LoginTab"
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={require('../assets/images/login.png')}
                    style={
                      focused
                        ? {width: 25, height: 25}
                        : {width: 25, height: 25, tintColor: 'grey'}
                    }
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigatorCompo;
