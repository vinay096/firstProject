import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const GetAPIList = () => {
  const [data, setData] = useState<IData[]>([
    {
      userId: 0,
      id: 0,
      title: '',
      body: '',
    },
  ]);

  const getData = async () => {
    //API call
    const url = 'https://jsonplaceholder.typicode.com/posts';
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
              <Text style={styles.text}>title: {item.title}</Text>
              <Text style={styles.text}>body: {item.body}</Text>
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

export default GetAPIList;
