import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface user {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const SingleSelect = () => {
  const [data, setData] = useState<user[]>([]);
  const [selectedId, setSelectedId] = useState<number>();

  const getData = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    axios
      .get(url)
      .then(response => {
        let result = response?.data;
        // console.warn(response.data);
        if (result?.length > 0) {
          setData(result);
        }
      })
      .catch(e => {
        console.warn(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const select = (id: number) => {
    if (selectedId === id) {
      setSelectedId(0);
    } else {
      setSelectedId(id);
    }
  };

  const renderItem = ({item}: {item: user}) => {
    const backgroundColor = item.id === selectedId ? '#DDD' : 'white';
    const color = item.id === selectedId ? 'blue' : 'black';

    return (
      <TouchableOpacity
        style={[styles.container, {backgroundColor}]}
        onPress={() => select(item.id)}>
        <Text style={{color: color}}>
          {item.id}. {item.name}
        </Text>

        <Text style={{color: color}}> {item.email}</Text>
        <Text style={{color: 'green'}}> Phone: {item.phone}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={{fontSize: 25}}>Flat List Single Item Select</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        // extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
});

export default SingleSelect;
