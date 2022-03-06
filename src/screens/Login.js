import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { auth, createUserWithEmailAndPassword } from '../config'
import { Ionicons } from '@expo/vector-icons';
export default function Login({ ...props }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
        }}  >

          <Image
            source={require('./iconss.png')}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <View style={{ width: '80%', marginTop: 20, alignSelf: 'center', elevation: 10, backgroundColor: 'white', borderRadius: 10 }} >
            <TextInput placeholder='Enter Your Email Here' style={{ borderWidth: 1, borderColor: "black", padding: 10, backgroundColor: 'white', color: 'black', borderRadius: 10, }} />
          </View>
          <View style={{ width: '80%', marginTop: 20, alignSelf: 'center', elevation: 10, backgroundColor: 'white', borderRadius: 10 }} >
            <TextInput placeholder='Enter Your Password Here' style={{ borderWidth: 1, borderColor: "black", padding: 10, backgroundColor: 'white', color: 'black', borderRadius: 10, }} />
          </View>
          <View style={{ width: '80%', alignSelf: 'center', borderRadius: 10, padding: 10, backgroundColor: 'orange', marginTop: 30 }} >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home')
                //   createUser(email, password);
              }}
              style={{ width: '100%', }} >
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 19 }} >Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  )
}