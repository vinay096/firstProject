import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import extStyle from '../common/extStyle';

const StyleLesson = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Styles in React Native</Text>
      <Text style={{color: 'green', fontSize: 25}}>
        1.checking in_line style
      </Text>
      <Text style={intStyle.textStyle}>2.checking internal style</Text>
      <Text style={extStyle.textStyle}>3.checking external style</Text>
      <Text style={[extStyle.textStyle, intStyle.textStyle, {color: 'black'}]}>
        4.checking all 3 styles simultaneously
      </Text>
    </View>
  );
};

const intStyle = StyleSheet.create({
  textStyle: {
    color: 'red',
    backgroundColor: 'lightyellow',
    fontSize: 20,
  },
});

export default StyleLesson;
