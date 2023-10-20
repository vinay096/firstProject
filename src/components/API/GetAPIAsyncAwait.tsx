import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const GetAPIAsyncAwait = () => {
  const [data, setData] = useState<IData>({
    userId: 0,
    id: 0,
    title: '',
    body: '',
  });

  const getData = async () => {
    //API call
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
      const res = await fetch(url);
      const result = await res.json();
      // console.warn(result);
      setData(result);
    } catch (error) {
      //Explicit Error Handling
      console.error(error);
      // handle error here, e.g. show an error message to the user
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {data ? (
        <View>
          <Text style={styles.text}>userId: {data.userId}</Text>
          <Text style={styles.text}>id: {data.id}</Text>
          <Text style={styles.text}>title: {data.title}</Text>
          <Text style={styles.text}>body: {data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
export default GetAPIAsyncAwait;
