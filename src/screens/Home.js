import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import { w, h } from 'react-native-responsiveness';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { fireDB } from '../config';
import { getDocs, collection, query, where, onSnapshot } from 'firebase/firestore';

export default function Home({ ...props }) {
    const [venues, setVenues] = useState([]);
    useEffect(() => {
        getVenues()
    }, [])
    const getVenues = async () => {
        console.log("getVenues")
        let temp = []
        const colRef = collection(fireDB, "venues")
        const query = await getDocs(colRef)
        query.forEach(doc => {
            // push doc id to temp and doc.data() to temp
            temp.push({ id: doc.id, ...doc.data() })
        })
        setVenues(temp)
    }
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
                }}>
                <View style={{ width: '20%' }}></View>
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
                <View style={{ width: '90%', padding: 10, backgroundColor: '#fff', borderRadius: 10, marginTop: 10, backgroundColor: 'white', alignSelf: 'center', elevation: 10 }} >
                    <TouchableOpacity style={{ backgroundColor: '#fff', flexDirection: 'row', }} onPress={() => props.navigation.navigate("Search")} >
                        <View style={{ width: '10%', justifyContent: 'center', }} >
                            <FontAwesome name="search" size={22} color="orange" />
                        </View>
                        <View style={{ width: '90%', justifyContent: 'center' }} >
                            <Text  >Search Your Venue Here...</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Further Components */}
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }} >
                    <Text style={{ fontWeight: 'bold', marginBottom: 10, marginLeft: 10, fontSize: 18 }} >
                        News Feed
                    </Text>
                    {venues.map((item, index) => (
                        <View key={index} style={{ width: '100%', elevation: 10, flexDirection: 'row', backgroundColor: '#fff', elevation: 10, marginTop: 10, marginBottom: 10, alignSelf: 'center', borderRadius: 10, padding: 10 }} >
                            <TouchableOpacity onPress={() => props.navigation.navigate("Profile", {
                                Vid: item.id,
                            })} style={{ flexDirection: 'row', }} >
                                <View style={{ width: '35%' }} >
                                    <Image style={{ width: '100%', height: 100, borderRadius: 10 }} source={{ uri: item.images[0] }} />
                                </View>
                                <View style={{ width: '63%', marginLeft: 10, paddingTop: 4, padding: 10 }}  >
                                    <Text style={{ fontWeight: 'bold' }} >
                                        {item.venueName}
                                    </Text>
                                    <Text numberOfLines={2} style={{ fontSize: 14, color: 'black' }} >
                                        {item.description}
                                    </Text>
                                    <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                        <AntDesign name="star" size={20} color="orange" />
                                        {item.rating !== 0 ?
                                            <Text style={{}} >
                                                {item.rating} ({item.totalMembers})
                                            </Text>
                                            : <Text style={{ marginLeft: 10 }} >
                                                No Rating Yet
                                            </Text>
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
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