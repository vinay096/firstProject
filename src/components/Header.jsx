import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.cartReducer);
  // console.warn(cartData);

  return (
    <View style={{backgroundColor: 'lightpink', height: 40}}>
      <Text style={{fontSize: 20, padding: 5, alignSelf: 'flex-end'}}>
        Cart Items : {cartData?.cartItems?.length}
      </Text>
    </View>
  );
};

export default Header;
