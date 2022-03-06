import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
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
            <ScrollView>


                <Image style={{ width: '100%', height: 200 }} source={{ uri: 'https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?s=612x612' }} />

                <View style={{ width: '90%', padding: 10, marginTop: 15, backgroundColor: 'white', flexDirection: 'row', elevation: 10, alignSelf: 'center', borderRadius: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold' }} >Name Of the Vendor</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <AntDesign name="star" size={20} color="orange" />
                        <Text style={{}} >
                            5.0 (30)
                        </Text>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', padding: 15, marginTop: 15, alignSelf: 'center', borderRadius: 10, justifyContent: 'space-between' }}>
                    <Text style={{ width: '90%', fontWeight: 'bold', }} >
                        Recent Events
                    </Text>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <View style={{ width: '100%', elevation: 10, flexDirection: 'row', backgroundColor: '#fff', elevation: 10, marginTop: 10, marginBottom: 10, alignSelf: 'center', borderRadius: 10, padding: 10 }} >
                            <View style={{ width: '35%' }} >

                                <Image style={{ width: '100%', height: 100, borderRadius: 10 }} source={{ uri: 'https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?s=612x612' }} />
                            </View>

                            <View style={{ width: '63%', marginLeft: 10, paddingTop: 4, padding: 10 }}  >
                                <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} >
                                    <Text style={{ fontWeight: 'bold' }} >
                                        Profile Name
                                    </Text>
                                </TouchableOpacity>

                                <Text numberOfLines={2} style={{ fontSize: 14 }} >
                                    loremloremloremloremloremloremloremloremloremloremlorem
                                </Text>
                                <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                    <AntDesign name="star" size={20} color="orange" />
                                    <Text style={{}} >
                                        5.0 (30)
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                    )
                    }

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
        </View >
    )
}