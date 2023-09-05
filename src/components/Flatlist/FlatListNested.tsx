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

  images: string[];
}

const FlatListNested = () => {
  const [data, setData] = useState<Products[]>([]);
  const [isHide, setIsHide] = useState(false);
  const [hideId, setHideId] = useState(0);

  const getData = () => {
    const url = 'https://api.escuelajs.co/api/v1/products';

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

  const show = (id: number) => {
    setIsHide(true);
    setHideId(id);
  };
  const hide = (id: number) => {
    setIsHide(false);
    setHideId(id);
  };

  return (
    <View>
      <Text style={{fontSize: 25}}>Flat List Nested</Text>

      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View>
              <TouchableOpacity style={styles.itemView}>
                <View style={styles.cardContainer}>
                  <Text>
                    {item.id}. {item.title}
                  </Text>
                  <View
                    style={{
                      width: 30,
                      alignSelf: 'flex-end',
                    }}>
                    <TouchableOpacity onPress={() => show(item.id)}>
                      {item.id === hideId && isHide ? (
                        <TouchableOpacity onPress={() => hide(item.id)}>
                          <Image
                            source={require('../../assets/images/up.png')}
                            style={{
                              height: 30,
                              width: 30,
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <Image
                          source={require('../../assets/images/down.png')}
                          style={{
                            height: 30,
                            width: 30,
                          }}
                        />
                      )}
                    </TouchableOpacity>
                  </View>

                  {item.id === hideId && isHide && (
                    <FlatList
                      data={item.images}
                      renderItem={list => (
                        <View>
                          <Image
                            source={{uri: list.item}}
                            style={styles.image}
                          />
                        </View>
                      )}
                    />
                  )}

                  <Text>{item.description.substring(0, 30)}...</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'green'}}>${item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
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
    flex: 1,
  },
  cardContainer: {
    padding: 10,
    rowGap: 10,
  },
  image: {
    height: 150,
    flex: 1,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default FlatListNested;
