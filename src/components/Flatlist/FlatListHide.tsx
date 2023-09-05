import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Products {
  id: number;
  email: string;
  name: string;
  avatar: string;
}

const FlatListHide = () => {
  const [data, setData] = useState<Products[]>([]);
  const [blockId, setBlockId] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    const url = 'https://api.escuelajs.co/api/v1/users';
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

  const block = (id: number) => {
    setBlockId([...blockId, id]);
  };
  const unBlock = (id: number) => {
    let list = [...blockId];
    list = list.filter(item => item !== id);
    setBlockId([...list]);
  };

  return (
    <View>
      <Text style={{fontSize: 25}}>Flat List Grid</Text>

      <FlatList
        data={data}
        numColumns={2}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={getData}
            colors={['skyblue', 'blue', 'green']}
            progressBackgroundColor={'white'}
            progressViewOffset={5}
          />
        }
        renderItem={({item}) => (
          <View>
            {!blockId.includes(item.id) ? (
              <TouchableOpacity style={styles.cardContainer}>
                <Text>
                  {item.id}. {item.name}
                </Text>
                <Image source={{uri: item?.avatar}} style={styles.image} />
                <Text>{item.email}</Text>

                <TouchableOpacity
                  style={{flexDirection: 'row', flex: 1}}
                  onPress={() => block(item.id)}>
                  <Text>Block {'  '}</Text>
                  <Image
                    source={require('../../assets/images/block-user.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            ) : (
              <View>
                <View style={styles.cardContainer}>
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 20,
                    }}>
                    Blocked
                  </Text>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',

                      position: 'absolute',
                      bottom: 0,
                      padding: 5,
                    }}
                    onPress={() => unBlock(item.id)}>
                    <Text>
                      Unblock {item.name}
                      {'  '}
                    </Text>
                    <Image
                      source={require('../../assets/images/unlock.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        )}
        // keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  icon: {width: 20, height: 20},

  cardContainer: {
    width: 205,
    height: 220,
    padding: 10,
    rowGap: 10,
    elevation: 2,
    borderRadius: 2,
  },
});

export default FlatListHide;
