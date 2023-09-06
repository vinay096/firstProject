import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const UnmountCompoDemo = () => {
  const [isMount, setIsMount] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 50, color: 'blue'}}>UnmountCompo Demo</Text>
      <Button title="Toggle MyCompo" onPress={() => setIsMount(!isMount)} />
      {isMount ? <MyCompo /> : null}
    </View>
  );
};

const MyCompo = () => {
  return (
    <View>
      <Text style={{fontSize: 50, color: 'green'}}> MyCompo</Text>
    </View>
  );
};
export default UnmountCompoDemo;
