import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const UnmountCompoUseEffect = () => {
  const [isMount, setIsMount] = useState(true);
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 50, color: 'blue'}}>UnmountCompo UseEffect</Text>
      <Button title="Toggle MyCompo" onPress={() => setIsMount(!isMount)} />
      <Button title="Toggle NewCompo" onPress={() => setShow(!show)} />
      {isMount ? <MyCompo /> : null}
      {show ? <NewCompo /> : null}
    </View>
  );
};

const MyCompo = () => {
  let timer = setInterval(() => {
    console.warn('timer');
  }, 2000);
  useEffect(() => {
    return () => clearInterval(timer);
  });
  return (
    <View>
      <Text style={{fontSize: 50, color: 'green'}}> MyCompo</Text>
    </View>
  );
};

const NewCompo = () => {
  useEffect(() => {
    return () =>
      console.warn('run only on unmounting of compo, not on mounting');
  });
  return (
    <View>
      <Text style={{fontSize: 50, color: 'green'}}> New Compo</Text>
    </View>
  );
};
export default UnmountCompoUseEffect;
