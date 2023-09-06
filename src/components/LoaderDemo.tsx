import React, {useState} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';

const LoaderDemo = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };

  return (
    <View>
      <ActivityIndicator size={200} color={'blue'} animating={show} />
      <Button title="Show Loader" onPress={handleShow} />
      <Button title="Hide Loader" onPress={handleHide} />
    </View>
  );
};

export default LoaderDemo;
