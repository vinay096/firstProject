import React, {useState} from 'react';
import {Button, StatusBar, StatusBarStyle, Text, View} from 'react-native';

const StatusbarDemo = () => {
  const [hide, setHide] = useState(false);
  const [barColor, setBarColor] = useState<StatusBarStyle>('default');

  const toggle = () => setHide(!hide);
  const changeColor = () => setBarColor('dark-content');

  return (
    <View>
      <StatusBar backgroundColor={'pink'} hidden={hide} barStyle={barColor} />
      <Button title="Toggle StatusBar" onPress={toggle} />
      <Button title="change StatusBar Color" onPress={changeColor} />
    </View>
  );
};

export default StatusbarDemo;
