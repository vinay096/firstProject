import React, {useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

interface IData {
  name: string;
  email: string;
  id: number;
  age: number;
}

const DeleteAPI = () => {
  const [data, setData] = useState<IData[]>([
    {
      name: '',
      email: '',
      id: 0,
      age: 0,
    },
  ]);

  const deleteAPIData = async (id: number) => {
    const url = 'http://10.0.2.2:3000/users/';
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    const result = await res.json();
    if (result) {
      console.warn('user deleted');
      getAPIData();
    }
  };

  const getAPIData = async () => {
    //Fake API call using JSON Server
    const url = 'http://10.0.2.2:3000/users';
    const res = await fetch(url);
    const result = await res.json();
    // console.warn(result);
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <View style={{backgroundColor: '#5643FE', marginBottom: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.headText}>id</Text>
          <Text style={styles.headText}>name</Text>
          <Text style={styles.headText}>email</Text>
          <Text style={styles.headText}>age</Text>
          <Text style={styles.headText}></Text>
        </View>
      </View>
      {data.length ? (
        <ScrollView>
          {data.map(item => (
            <View key={item.id} style={styles.main}>
              <Text style={styles.text}>{item.id}</Text>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.email}</Text>
              <Text style={styles.text}>{item.age}</Text>
              <Button title="Delete" onPress={() => deleteAPIData(item.id)} />
            </View>
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E07CFE',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    padding: 5,
  },
  headText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    padding: 5,
  },
});
export default DeleteAPI;
