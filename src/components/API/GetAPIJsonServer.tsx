import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

interface IData {
  name: string;
  email: string;
  id: number;
  age: number;
}

const GetAPIJsonServer = () => {
  const [data, setData] = useState<IData[]>([
    {
      id: 0,
      name: '',
      email: '',
      age: 0,
    },
  ]);
  const getData = async () => {
    //Fake API call using JSON Server
    const url = 'http://10.0.2.2:3000/users';
    const res = await fetch(url);
    const result = await res.json();
    // console.warn(result);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {data.length ? (
        <ScrollView>
          {data.map(item => (
            <View key={item.id}>
              <Text style={styles.idSty}>id: {item.id}</Text>
              <Text style={styles.text}>name: {item.name}</Text>
              <Text style={styles.text}>email: {item.email}</Text>
              <Text style={styles.text}>age: {item.age}</Text>
            </View>
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  idSty: {
    fontSize: 15,
    backgroundColor: '#FD75BE',
  },
});
export default GetAPIJsonServer;
