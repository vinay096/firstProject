import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const users = [
  {
    id: 1,
    name: 'Tanay',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    id: 2,
    name: 'Manisha',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    id: 3,
    name: 'Daksh',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    id: 4,
    name: 'Vikas',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const SectionListDemo = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={users}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.entity}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {name}}) => (
        <Text style={styles.header}>{name}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  entity: {
    fontSize: 24,
  },
});

export default SectionListDemo;
