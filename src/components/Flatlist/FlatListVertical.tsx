import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {rate: number; count: number};
}

const FlatListVertical = () => {
  const [data, setData] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    const url = 'https://fakestoreapi.com/products';
    setIsLoading(true);
    axios
      .get(url)
      .then(response => {
        let result = response?.data;
        // console.warn(response.data);
        if (result?.length > 0) {
          setData(result);
          setIsLoading(false);
        }
      })
      .catch(e => {
        console.warn(e);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 25}}>Flat List Vertical</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity style={styles.cardContainer}>
              <Text>
                {item.id}. {item.title}
              </Text>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text>{item.description.substring(0, 30)}...</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'green'}}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    textAlign: 'center',
  },

  image: {
    height: 150,
    flex: 1,
    resizeMode: 'contain',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  cardContainer: {
    width: '48%',
    padding: 10,
    rowGap: 10,
  },
  loading: {
    position: 'absolute',

    alignSelf: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});

export default FlatListVertical;
