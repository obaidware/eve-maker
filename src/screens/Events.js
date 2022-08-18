import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { fireDB } from '../config';
import { getDocs, getDoc, collection, doc, query, where, updateDoc, addDoc } from 'firebase/firestore';
import * as SecureStore from 'expo-secure-store';
import moment from 'moment';
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function Events({ ...props }) {
    const [data, setData] = useState([])
    const [review, setReview] = useState([])
    const [rating, setRating] = useState(0)

    const submitReview = async (item) => {
        let sa;
        await SecureStore.getItemAsync("userId")
            .then((user) => {
                sa = JSON.parse(user)
            });
        console.log(item)
        const colRef = collection(fireDB, "reviews")
        await addDoc(colRef, {
            name: item.nameEvent,
            review: review,
            stars: '5.0',
            userId: sa,
            venueId: item.venueId
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })


        // *************************
        // update a specific field using doc id
        const updateCol = doc(fireDB, 'bookings', item.id)
        await updateDoc(updateCol, { status: "reviewed" }).then((res) => {
            alert("Thank you for Leaving a Review!")
            getData()
        })

    }

    React.useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let sa;
        await SecureStore.getItemAsync("userId")
            .then((user) => {
                sa = JSON.parse(user)
            });
        let temp = [];
        const colRef = collection(fireDB, 'bookings')
        // get all the bookings from bookings based on bookerid
        const q = query(colRef, where('bookerid', '==', sa))
        const snap = await getDocs(q)
        snap.forEach((doc, index) => {
            temp.push({ id: doc.id, ...doc.data() })
        })
        setData(temp)
    }

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
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 19, textAlign: 'center' }} >Bookings</Text>
                </View>
            </View>
            <ScrollView>
                {
                    data.map((item, index) => (
                        <>
                            {/* moment().format("MMM Do YY"); */}
                            <View style={{ width: '90%', padding: 10, backgroundColor: 'white', elevation: 10, marginBottom: 10, alignSelf: 'center', borderRadius: 10, marginTop: 20 }} >
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Name: {item.nameEvent} </Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Date: {moment.unix(item?.date?.seconds).format("LL")} </Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Start Time: {item.starttime} </Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event End Time: {item.endtime} </Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Location: {item.location} </Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Price Per Head: {item.perhead} </Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Total Guests: {item.guests} </Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }} >Event Price: {item.perhead * item.guests} PKR/- </Text>
                                {item.status !== "completed" ?

                                    <Text style={{ textAlign: 'right' }} >Status: {item.status} </Text>
                                    :
                                    <>
                                        <Text style={{ marginTop: 20 }} >Leave a Review</Text>
                                        <AirbnbRating
                                            count={5}
                                            reviews={["Terrible", "Hmm...", "Very Good", "Wow", "Amazing"]}
                                            onFinishRating={(c) => {
                                                setRating(c)
                                            }}
                                            defaultRating={5}
                                            size={20}
                                        />

                                        <TextInput
                                            onChangeText={(val) => setReview(val)}
                                            style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, padding: 10, marginVertical: 10 }}
                                            multiline={true}
                                            placeholder="Write your review here"
                                        />
                                        <Text style={{ textAlign: 'right' }} >Status: Completed </Text>
                                        <TouchableOpacity
                                            onPress={() => submitReview(item)}
                                            style={{ backgroundColor: 'orange', padding: 5, marginTop: 5, borderRadius: 10 }} >
                                            <Text style={{ textAlign: 'center', color: 'white' }} >Submit</Text>
                                        </TouchableOpacity>
                                    </>
                                }
                            </View>

                            {/* <View style={{ width: '90%', padding: 10, backgroundColor: 'white', elevation: 10, alignSelf: 'center', borderRadius: 10, marginTop: 20, marginBottom: 15 }} >
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
                            </View> */}
                        </>
                    ))
                }
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