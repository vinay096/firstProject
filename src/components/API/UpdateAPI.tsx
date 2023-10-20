//update or edit data using Put method

import React, {useEffect, useState} from 'react';
import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import extStyle from '../../Style/extStyle';

interface IData {
  name: string;
  email: string;
  id: number;
  age: number;
}

const UpdateAPI = () => {
  const [data, setData] = useState<IData[]>([
    {
      id: 0,
      name: '',
      email: '',
      age: 0,
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState<IData>({
    id: 0,
    name: '',
    email: '',
    age: 0,
  });

  const updateAPIData = (userToEdit: IData) => {
    setShowModal(true);
    setEditUser(userToEdit);
  };

  const getAPIData = async () => {
    //Fake API call using JSON Server
    const url = 'http://10.0.2.2:3000/users';
    const res = await fetch(url);
    const result = await res.json();
    // console.warn(result);
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Update API</Text>
      <View style={{backgroundColor: '#5643FE', marginBottom: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.headText}>id</Text>
          <Text style={styles.headText}>name</Text>
          <Text style={styles.headText}>email</Text>
          <Text style={styles.headText}>age</Text>
          <Text style={styles.headText}></Text>
        </View>
      </View>
      {data.length ? (
        <ScrollView>
          {data.map(item => (
            <View key={item.id} style={styles.main}>
              <Text style={styles.text}>{item.id}</Text>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.email}</Text>
              <Text style={styles.text}>{item.age}</Text>
              <Button title="Edit" onPress={() => updateAPIData(item)} />
            </View>
          ))}
        </ScrollView>
      ) : null}
      <View style={stylesModal.root}>
        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={() => setShowModal(false)}
          transparent={true}>
          <MyModal
            setShowModal={setShowModal}
            editUser={editUser}
            getAPIData={getAPIData}
          />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E07CFE',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    padding: 5,
  },
  headText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    padding: 5,
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
});

const MyModal = (props: any) => {
  const [userEdit, setUserEdit] = useState<{
    name: string;
    email: string;
    id: number;
    age: number;
  }>({name: '', email: '', id: 0, age: 0});

  const user = props.editUser;
  useEffect(() => {
    if (props.editUser) {
      setUserEdit({
        ...userEdit,
        name: user.name,
        email: user.email,
        id: user.id,
        age: user.age,
      });
    }
  }, [props.editUser]);

  const updateUser = async () => {
    const url = 'http://10.0.2.2:3000/users/';
    const res = await fetch(`${url}/${user.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: userEdit.name,
        email: userEdit.email,
        id: userEdit.id,
        age: userEdit.age,
      }),
    });
    const result = await res.json();
    if (result) {
      console.warn('Updated Successfully', result);
      props.getAPIData();
      hide();
    }
  };

  const hide = () => props.setShowModal(false);
  return (
    <View style={stylesModal.main}>
      <View style={stylesModal.modal}>
        <Text style={stylesModal.text}>User Details</Text>
        <Text>Name</Text>
        <TextInput
          style={extStyle.inputTextStyle}
          placeholder="Name"
          value={userEdit.name}
          onChangeText={text => {
            setUserEdit({...userEdit, name: text});
          }}
        />

        <Text>Email</Text>
        <TextInput
          style={extStyle.inputTextStyle}
          placeholder="Email"
          value={userEdit.email}
          onChangeText={text => {
            setUserEdit({...userEdit, email: text});
          }}
        />

        <Text>Age</Text>
        <TextInput
          style={extStyle.inputTextStyle}
          placeholder="Age"
          value={userEdit.age?.toString()}
          keyboardType="numeric"
          onChangeText={text => {
            setUserEdit({...userEdit, age: +text});
          }}
        />

        {/* <Button title="Close" onPress={hide} /> */}
        <Button title="Update" onPress={updateUser} />
      </View>
    </View>
  );
};

const stylesModal = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D6E5FE',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightpink',
  },
  modal: {
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    shadowColor: '#202020',
  },
  text: {
    fontSize: 50,
    padding: 10,
    color: 'black',
  },
  button: {
    // flex: 1,
    // justifyContent: 'flex-end',
  },
});
export default UpdateAPI;
