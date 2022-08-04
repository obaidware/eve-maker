import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fireDB } from '../config';
import {
    collection,
    addDoc,
} from 'firebase/firestore';

export default function Register({ ...props }) {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    const registerUser = async () => {
        if (password == cpassword) {
            if (name !== "" && email !== "" && phone !== "") {
                let values = {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                    role: "customer",
                    admin: false
                }
                try {
                    const colRef = collection(fireDB, 'users');
                    const docRef = await addDoc(colRef, values)
                    setemail("");
                    setPassword("")
                    setCPassword("")
                    setphone("")
                    setname("")
                    props.navigation.navigate("Login")

                } catch (error) {
                    console.log("Error" + error);
                }
            } else {
                alert("Field can't be empty")
            }
        } else {
            alert("Passwords should match")
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }} >
            <View style={{ width: '100%', padding: 15, backgroundColor: 'orange', flexDirection: 'row' }} >
                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()} >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '90%', }} >
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 19, textAlign: 'center' }} >Register</Text>
                </View>
            </View>
            <ScrollView >
                <View style={{ width: '90%', alignSelf: 'center' }} >
                    <View style={{ marginTop: 20 }} >
                        <TextInput
                            onChangeText={(e) => setname(e)}
                            placeholder='Please enter your name' backgroundColor="white" style={{ padding: 15, borderRadius: 10, elevation: 10 }} />
                    </View>
                    <View style={{ marginTop: 20 }} >
                        <TextInput
                            onChangeText={(e) => setemail(e)}
                            placeholder='example@mail.com' backgroundColor="white" style={{ padding: 15, borderRadius: 10, elevation: 10 }} />
                    </View>
                    <View style={{ marginTop: 20 }} >
                        <TextInput
                            onChangeText={(e) => setphone(e)}
                            placeholder='+923XXXXXXXX' backgroundColor="white" style={{ padding: 15, borderRadius: 10, elevation: 10 }} />
                    </View>
                    <View style={{ marginTop: 20 }} >
                        <TextInput
                            onChangeText={(e) => setPassword(e)}
                            secureTextEntry={true}
                            placeholder='Password' backgroundColor="white" style={{ padding: 15, borderRadius: 10, elevation: 10 }} />
                    </View>
                    <View style={{ marginTop: 20 }} >
                        <TextInput
                            onChangeText={(e) => setCPassword(e)}
                            secureTextEntry={true}
                            placeholder='Confirm Password' backgroundColor="white" style={{ padding: 15, borderRadius: 10, elevation: 10 }} />
                    </View>
                </View>
                <View style={{ width: '80%', alignSelf: 'center', borderRadius: 10, padding: 10, backgroundColor: 'orange', marginTop: 30 }} >
                    <TouchableOpacity
                        onPress={() => registerUser()}
                        style={{ width: '100%', }} >
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 19 }} >Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}