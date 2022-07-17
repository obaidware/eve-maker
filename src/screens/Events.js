import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
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
            <ScrollView>

                <View style={{ width: '90%', padding: 10, backgroundColor: 'white', elevation: 10, alignSelf: 'center', borderRadius: 10, marginTop: 20 }} >
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Name: Wedding of John Doe </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Date: 12/12/2020 </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Start Time: 12:00 PM </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event End Time: 04:00 PM </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Location: Grand Sapphire Hotel </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Price: $100 </Text>
                    <Text style={{ textAlign: 'right' }} >Status: Pending </Text>
                </View>

                <View style={{ width: '90%', padding: 10, backgroundColor: 'white', elevation: 10, alignSelf: 'center', borderRadius: 10, marginTop: 20, marginBottom: 15 }} >
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Name: BirthDay Party of Obaid </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Date: 12/12/2020 </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Start Time: 12:00 PM </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event End Time: 04:00 PM </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Location: Grand Sapphire Hotel </Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Price: $100 </Text>
                    <Text style={{ marginTop: 20 }} >Leave a Review</Text>
                    <TouchableOpacity style={{ flexDirection: 'row' }} >
                        <Entypo name="star" size={20} color="orange" />
                        <Entypo name="star" size={20} color="orange" />
                        <Entypo name="star" size={20} color="orange" />
                        <Entypo name="star" size={20} color="lightgrey" />
                        <Entypo name="star" size={20} color="lightgrey" />
                    </TouchableOpacity>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, padding: 10, marginVertical: 10 }}
                        multiline={true}
                        placeholder="Write your review here"
                    />
                    <Text style={{ textAlign: 'right' }} >Status: Completed </Text>
                </View>
            </ScrollView>
            {/* <View style={{
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
            </View> */}
        </View>
    )
}