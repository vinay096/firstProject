import axios from 'axios';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {rate: number; count: number};
}

const SearchFilter = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<Products[]>([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef<TextInput>(null);
  const listRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  const [oldData, setOldData] = useState<Products[]>([]);

  const getData = () => {
    const url = 'https://fakestoreapi.com/products';

    axios
      .get(url)
      .then(response => {
        let result = response?.data;
        // console.warn(response.data);
        if (result?.length > 0) {
          setData(result);
          setOldData(result);
        }
      })
      .catch(e => {
        console.warn(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearch = (text: string) => {
    if (text === '') {
      setData(oldData);
    } else {
      let tempList = data.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempList);
    }
  };

  const changeText = (txt: string) => {
    onSearch(txt);
    setSearch(txt);
  };

  const clearText = () => {
    searchRef.current?.clear();
    onSearch('');
    setSearch('');
  };
  const show = () => setVisible(true);

  const hide = () => setVisible(false);

  const sortName = () => {
    let tempList = data.sort((a, b) => (a.title > b.title ? 1 : -1));
    setData(tempList);
    listRef.current?.scrollToIndex({animated: true, index: 0});
    setVisible(false);
  };

  const LowToHigh = () => {
    setData(data.sort((a, b) => a.price - b.price));
    listRef.current?.scrollToIndex({animated: true, index: 0});
    setVisible(false);
  };

  const HighToLow = () => {
    setData(data.sort((a, b) => b.price - a.price));
    listRef.current?.scrollToIndex({animated: true, index: 0});
    setVisible(false);
  };

  const sortRating = () => {
    setData(data.sort((a, b) => b.rating.rate - a.rating.rate));
    listRef.current?.scrollToIndex({animated: true, index: 0});
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.head}>
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.search}
          />
          <TextInput
            ref={searchRef}
            placeholder="search item here..."
            style={styles.input}
            value={search}
            onChangeText={txt => changeText(txt)}
          />
          {search == '' ? null : (
            <TouchableOpacity style={styles.touch1} onPress={clearText}>
              <Image
                source={require('../../assets/images/close.png')}
                style={styles.close}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.touch1} onPress={show}>
          <Image
            source={require('../../assets/images/filter.png')}
            style={styles.filter}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        ref={listRef}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={index}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.main,
                {marginBottom: index == data.length - 1 ? 20 : 0},
              ]}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.list}>
                <Text style={styles.title}>
                  {item.id}. {item.title.substring(0, 30)}
                </Text>
                <Text style={styles.describe}>
                  {item.description.substring(0, 50)}
                </Text>

                <View style={styles.inside}>
                  <Text style={styles.price}>{'$ ' + item.price}</Text>
                  <Text style={styles.rate}>{item.rating.rate}</Text>
                  <Image
                    source={require('../../assets/images/star.png')}
                    style={styles.star}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={hide}>
        <View style={styles.modal1}>
          <View style={styles.modal2}>
            <TouchableOpacity style={styles.sort1} onPress={sortName}>
              <TouchableOpacity style={styles.touch2} onPress={hide}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={styles.close}
                />
              </TouchableOpacity>
              <Text style={styles.text}> Sort By Name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sort1} onPress={LowToHigh}>
              <Text style={styles.text}>Low to High Price</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sort1} onPress={HighToLow}>
              <Text style={styles.text}>Hight to Low Price</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sort1} onPress={sortRating}>
              <Text style={styles.text}> Sort By Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  box: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    marginTop: 20,

    justifyContent: 'space-between',
  },
  head: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.2,

    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  search: {width: 24, height: 24, marginLeft: 15, opacity: 0.5},
  input: {width: '76%', height: 50},
  touch1: {marginRight: 15},
  close: {width: 16, height: 16, opacity: 0.5},
  filter: {width: 24, height: 24},
  main: {
    width: '90%',

    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,

    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: '90%',
    marginLeft: 10,
    borderRadius: 10,
  },
  list: {width: '80%'},
  title: {fontWeight: '600', marginLeft: 10, marginTop: 10},
  describe: {fontSize: 12, margin: 10},
  inside: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '800',
    color: 'green',
  },
  rate: {
    fontSize: 16,
    marginLeft: 50,
    fontWeight: '800',
    color: 'orange',
  },
  star: {width: 12, height: 12, marginLeft: 5},
  modal1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modal2: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  sort1: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  touch2: {marginLeft: 280},
  text: {fontSize: 18, color: '#000'},
});

export default SearchFilter;
