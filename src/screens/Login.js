import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { fireDB } from '../config'
import { Ionicons } from '@expo/vector-icons';
import { getDocs, collection, query, where, onSnapshot } from 'firebase/firestore'
import * as SecureStore from 'expo-secure-store';
import { Context } from '../store';

export default function Login({ ...props }) {

  const { state, dispatch } = useContext(Context);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({})

  const checkUser = async () => {
    let temp = {}

    await SecureStore.getItemAsync("userId")
      .then((user) => {
        temp.id = JSON.parse(user)
      });

    await SecureStore.getItemAsync("userData")
      .then((user) => {
        console.log(user)
        setUserData(JSON.parse(user))
      });

    if (temp.id) {
      dispatch({ type: "LOGIN" })
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  const loggedIn = () => {
    return (
      <>
        <View style={{ width: '100%', padding: 15, backgroundColor: 'orange', flexDirection: 'row' }} >
          <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()} >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ width: '90%', }} >
            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 19, textAlign: 'center' }} >
              Profile
            </Text>
          </View>

        </View>
        <ScrollView>
          <View style={{ width: '100%', }} >
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'orange',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
            marginVertical: 10,
            padding: 10
          }}
          onPress={async () => {
            await SecureStore.deleteItemAsync("userId");
            await SecureStore.deleteItemAsync("userData");
            dispatch({ type: "LOGOUT" })
          }}>
          <Text style={{ fontWeight: 'bold', color: 'white' }} >
            Logout
          </Text>
        </TouchableOpacity>
      </>
    )
  }


  const loginHandler = async () => {

    if (email !== "" && password !== "") {

      const colRef = collection(fireDB, 'users');

      const queryRef = query(colRef, where('email', '==', email), where('password', '==', password));

      const res = await onSnapshot(queryRef, async (querySnapshot) => {

        if (querySnapshot.size > 0) {

          console.log(querySnapshot.docs[0].data())

          console.log(querySnapshot.docs[0].id)
          await SecureStore.setItemAsync('userId', JSON.stringify(querySnapshot.docs[0].id));
          await SecureStore.setItemAsync('userData', JSON.stringify(querySnapshot.docs[0].data()));
          checkUser();
        } else {

          alert("Email Or Password is Wrong!")

        }

      })

    } else {

      alert("Please Enter Email and Password")

    }
  }
  const LoginView = () => {
    return (
      <>
        <View style={{ width: '100%', padding: 15, backgroundColor: 'orange', flexDirection: 'row' }} >
          <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()} >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ width: '90%', }} >
            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 19, textAlign: 'center' }} >Login</Text>
          </View>
        </View>
        <View style={{
          flex: 1,
        }}>
          <ScrollView style={{
            height: '100%',
            width: '100%',
          }} contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            flex: 1,
          }}>

            <Image
              source={require('./iconss.png')}
              style={{
                width: 150,
                height: 150,
              }}
            />
            <View style={{ width: '80%', marginTop: 20, alignSelf: 'center', elevation: 10, backgroundColor: 'white', borderRadius: 10 }} >
              <TextInput
                onChangeText={(e) => setEmail(e)}
                placeholder='Enter Your Email Here' style={{ borderWidth: 1, borderColor: "black", padding: 10, backgroundColor: 'white', color: 'black', borderRadius: 10, }} />
            </View>
            <View style={{ width: '80%', marginTop: 20, alignSelf: 'center', elevation: 10, backgroundColor: 'white', borderRadius: 10 }} >
              <TextInput
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
                placeholder='Enter Your Password Here' style={{ borderWidth: 1, borderColor: "black", padding: 10, backgroundColor: 'white', color: 'black', borderRadius: 10, }} />
            </View>
            <View style={{ width: '80%', alignSelf: 'center', borderRadius: 10, padding: 10, backgroundColor: 'orange', marginTop: 30 }} >
              <TouchableOpacity
                onPress={() => {
                  // props.navigation.navigate('Home')
                  loginHandler()
                  //   createUser(email, password);
                }}
                style={{ width: '100%', }} >
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 19 }} >Login</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '80%', alignSelf: 'center', borderRadius: 10, padding: 10, backgroundColor: 'orange', marginTop: 30 }} >
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Register')}
                style={{ width: '100%', }} >

                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 19 }} >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </>
    )
  }
  return (
    <>
      {
        state.isloggedin ? loggedIn() : LoginView()
      }
    </>
  )
}