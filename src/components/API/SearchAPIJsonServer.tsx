import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

interface IData {
  name: string;
  email: string;
  id: number;
  age: number;
}

const SearchAPIJsonServer = () => {
  const [data, setData] = useState<IData[]>([]);
  const searchData = async (text: any) => {
    // console.warn(text);
    if (text) {
      const url = 'http://10.0.2.2:3000/users';
      let res = await fetch(`${url}?q=${text}`);
      let result = await res.json();
      // console.warn(result)
      if (result) {
        setData(result);
      }
    } else {
      setData([]);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Search with API</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={text => {
          searchData(text);
        }}
      />

      {data.length ? (
        <View>
          <View style={styles.table}>
            <Text style={styles.headText}>id</Text>
            <Text style={styles.headText}>name</Text>
            <Text style={styles.headText}>email</Text>
            <Text style={styles.headText}>age</Text>
          </View>

          <ScrollView>
            {data.map(item => (
              <View key={item.id} style={styles.main}>
                <Text style={styles.text}>{item.id}</Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.email}</Text>
                <Text style={styles.text}>{item.age}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <Text style={styles.noData}>No data found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EEE',
    marginBottom: 10,
  },
  headText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: 'black',
    padding: 5,
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
  searchBar: {
    borderWidth: 2,
    borderColor: '#DDD',
    borderRadius: 10,
    fontSize: 20,
    height: 40,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
    marginStart: 10,
    padding: 10,
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5643FE',
    marginBottom: 10,
  },
  noData: {fontSize: 25, marginLeft: 15},
});
export default SearchAPIJsonServer;
