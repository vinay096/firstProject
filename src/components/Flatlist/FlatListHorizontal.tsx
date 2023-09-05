import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
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

const FlatListHorizontal = () => {
  const [data, setData] = useState<Products[]>([]);

  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const getData = () => {
    const url = 'https://fakestoreapi.com/products';

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
  return (
    <View>
      <Text style={{fontSize: 25}}>Flat List Horizontal</Text>
      <FlatList
        data={data}
        horizontal
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                styles.itemView,
                {width: width / 2.3, height: height / 3},
              ]}>
              <Text>
                {item.id}. {item.title.substring(0, 30)}...
              </Text>
              <Image
                source={{uri: item.image}}
                style={[
                  styles.productImage,
                  {width: width / 4, height: height / 6},
                ]}
              />
              <Text>{item.description.substring(0, 30)}...</Text>
              <Text style={{color: 'green'}}>${item.price}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    marginTop: 10,
    backgroundColor: '#fff',
    marginLeft: 5,
    elevation: 5,
    borderRadius: 5,
    padding: 10,
  },
  productImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    flex: 1,
  },
});

export default FlatListHorizontal;
