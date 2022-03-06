import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import { w, h } from 'react-native-responsiveness';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ ...props }) {

    return (
        <View style={{ backgroundColor: '#fff' }} >

            <View
                style={{
                    width: w('100%'),
                    height: h('8%'),
                    backgroundColor: 'orange',
                    elevation: 15,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View style={{ width: '20%' }}>
                    <TouchableOpacity
                        style={{ marginLeft: 15 }}
                        onPress={() => alert("Open Menu")} >
                        <Entypo name="dots-three-vertical" size={22} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff', fontWeight: '700' }} >
                        Home
                    </Text>
                </View>

                <View style={{ width: '20%', right: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 25 }} onPress={() => props.navigation.navigate('Events')} >
                        <MaterialIcons name="event-available" size={26} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20 }} onPress={() => props.navigation.navigate("Login")} >
                        <Fontisto name={"user-secret"} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>


                {/* Search bar */}
                <TouchableOpacity style={{ backgroundColor: '#fff' }} onPress={() => props.navigation.navigate("Search")} >
                    <View style={{ width: '90%', padding: 10, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginTop: 10, backgroundColor: 'white', alignSelf: 'center', elevation: 10 }} >
                        <View style={{ width: '10%', justifyContent: 'center', }} >
                            <FontAwesome name="search" size={22} color="orange" />
                        </View>
                        <View style={{ width: '90%', justifyContent: 'center' }} >
                            <Text  >Search Your Venue Here...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Further Components */}
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }} >
                    <Text style={{ fontWeight: 'bold', marginBottom: 10, marginLeft: 10, fontSize: 18 }} >
                        News Feed
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
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});