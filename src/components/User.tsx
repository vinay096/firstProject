import {StyleSheet, Text, View} from 'react-native';

const User = (props: {item: any}) => {
  const {name, email} = props.item;
  return (
    <View style={style.boxStyle}>
      <Text style={style.textStyle}> {name}</Text>
      <Text style={style.textStyle}> {email}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  boxStyle: {flexDirection: 'row'},
  textStyle: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
    marginRight: 10,
    fontSize: 20,
  },
});

export default User;
