import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Header from './Header';
import Product from './Product';

const ReduxDemo = () => {
  const mobileIconUrl =
    'https://img.icons8.com/?size=512&id=5wGnhtHODuE9&format=png';
  const products = [
    {
      name: 'Apple iphone',
      color: 'white',
      price: 110000,
      image: mobileIconUrl,
    },
    {
      name: 'Samsung',
      color: 'blue',
      price: 20000,
      image: mobileIconUrl,
    },
    {
      name: 'Pixel',
      color: 'green',
      price: 40000,
      image: mobileIconUrl,
    },
    {
      name: 'Motorola',
      color: 'pink',
      price: 30000,
      image: mobileIconUrl,
    },
    {
      name: 'Redmi',
      color: 'yellow',
      price: 15000,
      image: mobileIconUrl,
    },
    {
      name: 'onePlus',
      color: 'red',
      price: 35000,
      image: mobileIconUrl,
    },
  ];
  return (
    <View>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ReduxDemo;
