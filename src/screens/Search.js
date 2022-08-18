import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fireDB } from '../config';
import { getDocs, collection, query, where, onSnapshot } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Search({ ...props }) {

    const [que, setQue] = useState("")
    const [res, setRes] = useState([])

    useEffect(() => {
        searchVenue()
    }, [que])

    const searchVenue = async () => {
        let tempArra = []
        const dbref = collection(fireDB, 'venues')
        const q = query(dbref, where("venueName", "<=", que))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc, index) => {
            // push data in form of array in temp
            tempArra.push({ id: doc.id, ...doc.data() })
        })
        setRes(tempArra)
        // console.log(loadReviews)
        // console.log("loadReviews")
    }

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
                        <TextInput onChangeText={(val) => setQue(val)} placeholder='Search Your Venue Here...' placeholderTextColor={"black"} />
                    </View>
                </View>
            </View>

            {/* <View style={{ width: '90%', alignSelf: 'center', padding: 10 }} >

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
            </View> */}

            {res.length !== 0 &&
                res?.map((item, index) => (
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
                                    <Text style={{}} >
                                        {item.rating} ({item.totalMembers})
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>
    )
}