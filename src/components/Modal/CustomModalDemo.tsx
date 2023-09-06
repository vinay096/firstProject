import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CustomModalDemo = () => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <View style={styles.root}>
      <View style={styles.button}>
        <Button title="Show Modal" onPress={show} />
      </View>
      {visible ? (
        <View style={styles.main}>
          <View style={styles.modal}>
            <Text style={styles.text}> Custom Modal Demo</Text>
            <Button title="Hide Modal" onPress={hide} />
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D6E5FE',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightpink',
  },
  modal: {
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    shadowColor: '#202020',
  },
  text: {
    fontSize: 30,
    padding: 10,
    color: 'black',
  },
  button: {
    // flex: 1,
    // justifyContent: 'flex-end',
  },
});
export default CustomModalDemo;
