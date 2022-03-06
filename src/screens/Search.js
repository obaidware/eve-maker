import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search({ ...props }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ width: '100%', padding: 10, flexDirection: 'row', elevation: 10, backgroundColor: 'white', alignSelf: 'center' }} >
                <View style={{ width: '10%', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={() => props.navigation.goBack()} >
                        <Ionicons name="arrow-back" size={24} color="orange" />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '85%', flexDirection: 'row', marginLeft: 10, backgroundColor: '#CCCCCC', padding: 10, borderRadius: 10 }} >
                    <View style={{ width: '90%' }} >
                        <TextInput placeholder='Search Your Venue Here...' placeholderTextColor={"black"} />
                    </View>
                </View>
            </View>

            <View style={{ width: '90%', alignSelf: 'center', padding: 10 }} >

                <Text style={{ fontWeight: 'bold', fontSize: 17 }} >
                    Popular Searches
                </Text>

                <View style={{ flexDirection: 'row', width: '100%', flexWrap: "wrap", }} >
                    {[{ title: 'Karachi', }, { title: "Lahore" }, { title: "Lahore" }, { title: "Lahore" }, { title: "Lahore" }, { title: "Lahore" }, { title: "Faisalabad" }, { title: "Faisalabad" }, { title: "Islamabad" }]
                        .map((item) => {
                            return (
                                <TouchableOpacity style={{ marginTop: 10, marginRight: 10 }} >
                                    <View style={{ fontSize: 17, backgroundColor: '#cccccc', padding: 10, borderRadius: 25, alignSelf: 'flex-start' }} >
                                        <Text>
                                            {item.title}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                </View>
            </View>
        </View>
    )
}