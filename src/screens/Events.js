import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function Events({ ...props }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }} >
            <View style={{ width: '100%', padding: 15, backgroundColor: 'orange', flexDirection: 'row' }} >
                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()} >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '90%', }} >
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 19, textAlign: 'center' }} >Booked Events</Text>
                </View>
            </View>


            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}>
                <Entypo name="emoji-sad" size={50} style={{ marginBottom: 20 }} color="orange" />
                <Text style={{ fontWeight: 'bold', fontSize: 18, width: "80%", alignSelf: 'center', textAlign: 'center' }} >
                    Opss! You don't have any Events Booked Yet
                </Text>

                <View style={{ width: '60%', alignSelf: 'center', borderRadius: 10, justifyContent: 'center', marginTop: 20, backgroundColor: 'orange', padding: 10 }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ width: '100%' }} >
                        <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }} >Start Booking Now!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}