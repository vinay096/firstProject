import React, {useEffect, useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/action';

const Product = props => {
  const [isAdded, setIsAdded] = useState(false);
  const item = props.item;
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cartReducer)?.cartItems;

  // console.warn('cartData>>', cartData);
  useEffect(() => {
    let result = cartData.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartData]);

  const handleRemoveFromCart = item => {
    // console.warn('remove>>', item);
    dispatch(removeFromCart(item.name));
  };
  const handleAddToCart = item => {
    // console.warn('add>>', item);
    dispatch(addToCart(item));
  };
  return (
    <View
      key={item.name}
      style={{
        alignItems: 'center',
        borderBottomWidth: 5,
        padding: 10,
        borderColor: 'skyblue',
      }}>
      <Text style={{fontSize: 20}}>{item.name}</Text>
      <Text style={{fontSize: 20}}>Color: {item.color}</Text>
      <Text style={{fontSize: 20}}>Price: Rs.{item.price}</Text>
      <Image
        source={{uri: item.image}}
        style={{width: 100, height: 100, marginBottom: 10}}
      />
      {isAdded ? (
        <Button
          title="Remove from Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default Product;
