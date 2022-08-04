import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { fireDB } from '../config';
import { getDocs, getDoc, collection, doc, query, where, onSnapshot, addDoc } from 'firebase/firestore';
import * as SecureStore from 'expo-secure-store';


export default function Booking({ ...props }) {
    const [data, setData] = useState(props.route.params.data);

    const [selectedDate, setSelectedDate] = useState(null);


    const [name, setName] = useState("")

    const [starttime, setstartTime] = useState("")

    const [endtime, setEndTime] = useState("")

    const [guests, setGuests] = useState("")

    const [perperson, setperPerson] = useState("")

    const [location, setLocation] = useState(data.venueName)

    // console.log(data)

    const bookEvent = async () => {
        let values = {}
        let sa;
        await SecureStore.getItemAsync("userId")
            .then((user) => {
                sa = JSON.parse(user)
            });
        console.log(sa)
        if (sa !== "" || sa !== undefined || sa !== null) {

            if (
                name !== "" &&
                starttime !== "" &&
                endtime !== "" &&
                guests !== "" &&
                selectedDate !== null &&
                location !== "" &&
                perperson !== ""
            ) {
                values = {
                    bookerid: sa,
                    venue: data.venueName,
                    venueId: props.route.params.vid,
                    status: "onWait",
                    nameEvent: name,
                    perhead: perperson,
                    starttime: starttime,
                    endtime: endtime,
                    guests: guests,
                    location: location,
                    date: new Date(selectedDate),
                }
                const colRef = collection(fireDB, 'bookings')
                const addData = await addDoc(colRef, values)
                    .then((res) => {
                        console.log(res)
                        props.navigation.replace('Events')
                    }).catch((err) => {
                        console.log(err)
                        console.log("err")
                    })

            } else {
                alert("Please fill all the fields")
            }
        } else {
            props.navigation.navigate('Login')
        }
        // const colRef = collection(fireDB, "bookings")
        // const docRef = await addDoc(colRef, values)
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }} >
            <View style={{ width: '100%', padding: 15, backgroundColor: 'orange', flexDirection: 'row' }} >
                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()} >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '90%' }} >
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 19, textAlign: 'center' }} >
                        Booking
                    </Text>
                </View>
            </View>
            <ScrollView>

                <View style={{ width: '100%', }} >
                    <Image
                        style={{ width: 400, height: 200 }}
                        source={{ uri: data.images[0] }}
                    />
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginVertical: 10, backgroundColor: 'white', elevation: 10, padding: 10, borderRadius: 10 }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', }} >
                        {data.venueName}
                    </Text>
                </View>
                <CalendarPicker
                    // disabledDates={[moment(selectedDate).toString()]}
                    onDateChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                />
                <View style={{ width: '90%', alignSelf: 'center', backgroundColor: "white", marginVertical: 10, borderRadius: 15 }} >
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }} >
                            Appointment Date:
                        </Text>
                        <Text style={{ fontSize: 18, marginLeft: 10 }} >
                            {selectedDate ? moment(selectedDate.toString()).format("ll") : ''}
                        </Text>
                    </View>

                    <View style={{ marginVertical: 20 }} >
                        <TextInput onChangeText={(val) => setName(val)} placeholder='Event Name' style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 10, borderColor: 'grey' }} />
                        <TextInput onChangeText={(val) => setstartTime(val)} placeholder='Event Start Time (XX:XX)' style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 10, borderColor: 'grey' }} />
                        <TextInput onChangeText={(val) => setEndTime(val)} placeholder='Event End Time (XX:XX)' style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 10, borderColor: 'grey' }} />
                        <TextInput onChangeText={(va) => setLocation(va)} value={location} placeholder='Event Location' style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 10, borderColor: 'grey' }} />
                        <TextInput onChangeText={(va) => setperPerson(va)} placeholder='Price Per Head' style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 10, borderColor: 'grey' }} />
                        <TextInput onChangeText={(va) => setGuests(va)} keyboardType="decimal-pad" placeholder='Number of guests' style={{ padding: 10, borderWidth: 1, borderRadius: 10, borderColor: 'grey' }} />
                    </View>
                </View>

            </ScrollView>
            <TouchableOpacity style={{ padding: 10, backgroundColor: 'orange' }}
                onPress={() => bookEvent()}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 17, fontWeight: 'bold' }} >Book Now</Text>
            </TouchableOpacity>
        </View>
    )
}