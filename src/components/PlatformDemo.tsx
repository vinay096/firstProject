import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const PlatformDemo = () => {
  return (
    <View>
      <Text style={styles.main}>{JSON.stringify(Platform)}</Text>

      <Text style={styles.text}>Platform: {Platform.OS}</Text>
      <Text style={styles.text}>
        React Native Version:{' '}
        {JSON.stringify(Platform.constants.reactNativeVersion.minor)}
      </Text>
      {Platform.OS !== 'android' ? (
        <View>
          <Text style={styles.text}>Perform Android related Functionality</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Perform iOS related Functionality</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Platform.OS == 'android' ? 'blue' : 'green',
    fontSize: 30,
    marginBottom: 10,
  },
  main: {
    marginBottom: 30,
  },
});
export default PlatformDemo;
