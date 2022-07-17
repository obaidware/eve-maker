import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';


export default function Booking({ ...props }) {
    const [selectedDate, setSelectedDate] = useState(null);
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
                        source={{ uri: 'https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?s=612x612' }}
                    />
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginVertical: 10, backgroundColor: 'white', elevation: 10, padding: 10, borderRadius: 10 }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', }} >
                        Grand Sapphire Hotel
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
                        {/* <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }} >Arrangement for </Text> */}
                        <TextInput keyboardType="decimal-pad" placeholder='Number of guests' style={{ padding: 10, borderWidth: 1, borderRadius: 10, borderColor: 'grey' }} />

                    </View>
                </View>

            </ScrollView>
            <TouchableOpacity style={{ padding: 10, backgroundColor: 'orange' }}
                onPress={() => {
                    alert("Booking Successful")
                    props.navigation.navigate('Home')
                }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 17, fontWeight: 'bold' }} >Book Now</Text>
            </TouchableOpacity>
        </View>
    )
}