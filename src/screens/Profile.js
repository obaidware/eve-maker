import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


export default function Profile({ ...props }) {

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
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 19, textAlign: 'center' }} >Profile</Text>
                </View>
            </View>
            <View style={{ width: '100%', }} >
                <Image

                    style={{ width: 400, height: 200 }}
                    source={{ uri: 'https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?s=612x612' }}
                />
            </View>

            <ScrollView>
                <View style={{ width: '90%', padding: 10, marginTop: 15, backgroundColor: 'white', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold' }} >Wedding/Party</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <AntDesign name="star" size={20} color="orange" />
                        <Text style={{}} >
                            5.0 (30)
                        </Text>
                    </View>
                </View>

                <View style={{ width: '90%', alignSelf: 'center' }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
                        Grand Sapphire Hotel
                    </Text>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }} >
                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}>
                        {
                            [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                                <Image
                                    key={index}
                                    style={{ width: 320, height: 200, borderRadius: 20, marginRight: 10 }}
                                    source={{ uri: 'https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?s=612x612' }}
                                />
                            ))
                        }
                    </ScrollView>

                </View>

                <View style={{ width: "90%", alignSelf: 'center', marginTop: 20, marginBottom: 20 }} >
                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                        <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                            <Entypo name='calendar' size={24} />
                        </View>

                        <View style={{ justifyContent: 'center' }} >
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Opening Time</Text>
                            <Text style={{ fontSize: 15, color: 'grey', }}>2:00 pm</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                        <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                            <Entypo name='calendar' size={24} />
                        </View>

                        <View style={{ justifyContent: 'center' }} >
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Closing Time</Text>
                            <Text style={{ fontSize: 15, color: 'grey', }}>10:00 pm</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                        <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                            <Ionicons name='call' size={24} />
                        </View>

                        <View style={{ justifyContent: 'center' }} >
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Call</Text>
                            <Text style={{ fontSize: 15, color: 'grey', }}>+92333333333</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                        <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                            <Entypo name='mail' size={24} />
                        </View>

                        <View style={{ justifyContent: 'center' }} >
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Email</Text>
                            <Text style={{ fontSize: 15, color: 'grey', }}>example@email.com</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginVertical: 20 }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }} >
                        Description
                    </Text>
                    <Text style={{ fontSize: 16 }} >
                        Grand Sapphire is the ideal Pakistani wedding venue whether you have a Muslim Nikah ceremony, Baraat or Walima ceremony. A traditional Pakistani wedding
                    </Text>
                </View>

                <View style={{ height: 300, flex: 1, width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 40 }} >
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        showsBuildings={true}
                        showsPointsOfInterest={false}
                        maxZoomLevel={25}
                        minZoomLevel={0}
                        showsTraffic={true}
                        scrollEnabled={true}
                        rotateEnabled={true}
                        zoomEnabled={true}
                        zoomControlEnabled={true}
                        region={{
                            latitude: 32.1822365439,
                            longitude: 72.7459192704,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        style={{ ...StyleSheet.absoluteFill }}
                    >

                        <Marker coordinate={{ latitude: 32.1822365439, longitude: 72.7459192704 }} >
                            <Entypo name='location' size={22} />
                        </Marker>
                    </MapView>
                </View>
                <View style={{ width: '90%', alignSelf: 'center' }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }} >
                        Reviews
                    </Text>
                </View>
                <View style={{ width: '90%', padding: 20, backgroundColor: 'white', borderRadius: 10, elevation: 10, marginBottom: 80, alignSelf: 'center' }} >
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }} >
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                                Name of Cutomer
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <AntDesign name="star" size={20} color="orange" />
                            <Text style={{}} >
                                5.0
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 4 }} >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("Booking")
            }} style={{ position: 'absolute', bottom: 10, alignSelf: 'center', paddingVertical: 15, backgroundColor: 'orange', borderRadius: 25, paddingHorizontal: 40 }} >
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }} >
                    Book an Appointment!
                </Text>
            </TouchableOpacity>

        </View >
    )
}