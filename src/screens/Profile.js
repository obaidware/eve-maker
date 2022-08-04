import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { fireDB } from '../config';
import { getDocs, getDoc, collection, doc, query, where, onSnapshot } from 'firebase/firestore';

export default function Profile({ ...props }) {
    console.log(props.route.params.Vid)
    const [vid, setVid] = React.useState(props.route.params.Vid)
    const [profileData, setProfileData] = useState([])
    const [loading, setLoading] = useState(true);
    const [loadReviews, setReviews] = useState([]);
    console.log(profileData)
    console.log("profileData")
    React.useEffect(() => {
        setLoading(true)
        getDataById()
        // getReviewsByDocId()
    }, [])

    const getDataById = async () => {
        console.log(vid)
        console.log("vid")
        const delRef = doc(fireDB, 'venues', vid);
        await getDoc(delRef).then(doc => {
            // console.log(doc.data())
            setProfileData(doc.data())
            getReviewsByDocId()
            setLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }

    const getReviewsByDocId = async () => {
        let tempArra = []
        const dbref = collection(fireDB, 'reviews')
        const q = query(dbref, where("venueId", "==", vid))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((item, index) => {
            // push data in form of array in temp
            tempArra.push(item.data())
        })
        setReviews(tempArra)
        console.log(loadReviews)
        console.log("loadReviews")
    }

    return (
        <>
            {
                loading ?
                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >

                        <Text>
                            Loading...
                        </Text>
                    </View>
                    :
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
                                source={{ uri: profileData?.images[0] }}
                            />
                        </View>

                        <ScrollView>
                            <View style={{ width: '90%', padding: 10, marginTop: 15, backgroundColor: 'white', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold' }} >{profileData.type}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                    <AntDesign name="star" size={20} color="orange" />
                                    <Text style={{}} >
                                        {profileData.rating} ({profileData.totalMembers})
                                    </Text>
                                </View>
                            </View>

                            <View style={{ width: '90%', alignSelf: 'center' }} >
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
                                    {profileData.venueName}
                                </Text>
                            </View>

                            <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }} >
                                <ScrollView horizontal
                                    showsHorizontalScrollIndicator={false}>
                                    {
                                        profileData.images.map((item, index) => (
                                            <Image
                                                key={index}
                                                style={{ width: 320, height: 200, borderRadius: 20, marginRight: 10 }}
                                                source={{ uri: item }}
                                            />
                                        ))
                                    }
                                </ScrollView>

                            </View>

                            <View style={{ width: "90%", alignSelf: 'center', marginTop: 20, marginBottom: 20 }} >
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                                    <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                                        <Entypo name='user' size={24} />
                                    </View>

                                    <View style={{ justifyContent: 'center' }} >
                                        <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Maximum Guests</Text>
                                        <Text style={{ fontSize: 15, color: 'grey', }}>{profileData.maxMembers}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                                    <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                                        <Entypo name='user' size={24} />
                                    </View>

                                    <View style={{ justifyContent: 'center' }} >
                                        <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Minimum Guests</Text>
                                        <Text style={{ fontSize: 15, color: 'grey', }}>{profileData.minMembers}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                                    <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                                        <Entypo name='calendar' size={24} />
                                    </View>

                                    <View style={{ justifyContent: 'center' }} >
                                        <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Opening Time</Text>
                                        <Text style={{ fontSize: 15, color: 'grey', }}>{profileData.openingTime}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                                    <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                                        <Entypo name='calendar' size={24} />
                                    </View>

                                    <View style={{ justifyContent: 'center' }} >
                                        <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Closing Time</Text>
                                        <Text style={{ fontSize: 15, color: 'grey', }}>{profileData.closingTime}</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                                    <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                                        <Ionicons name='call' size={24} />
                                    </View>

                                    <View style={{ justifyContent: 'center' }} >
                                        <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Call</Text>
                                        <Text style={{ fontSize: 15, color: 'grey', }}>{profileData.phone}</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }} >
                                    <View style={{ marginRight: 10, padding: 10, backgroundColor: 'white', elevation: 10, borderRadius: 10 }} >
                                        <Entypo name='mail' size={24} />
                                    </View>

                                    <View style={{ justifyContent: 'center' }} >
                                        <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Email</Text>
                                        <Text style={{ fontSize: 15, color: 'grey', }}>{profileData.email}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '90%', alignSelf: 'center', marginVertical: 20 }} >
                                <Text style={{ fontWeight: 'bold', fontSize: 24 }} >
                                    Description
                                </Text>
                                <Text style={{ fontSize: 16 }} >
                                    {profileData.description}
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
                            <View style={{ marginBottom: 90 }} >

                                {
                                    loadReviews?.map((item, index) => (
                                        <View style={{ width: '90%', padding: 20, backgroundColor: 'white', borderRadius: 10, elevation: 10, marginBottom: 20, alignSelf: 'center' }} >
                                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }} >
                                                <View>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                                    <AntDesign name="star" size={20} color="orange" />
                                                    <Text style={{}} >
                                                        {item.stars}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ marginTop: 4 }} >
                                                <Text>
                                                    {item.review}
                                                </Text>
                                            </View>
                                        </View>
                                    ))
                                }
                            </View>
                        </ScrollView>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate("Booking", {
                                data: profileData,
                                vid: vid

                            })
                        }} style={{ position: 'absolute', bottom: 10, alignSelf: 'center', paddingVertical: 15, backgroundColor: 'orange', borderRadius: 25, paddingHorizontal: 40 }} >
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }} >
                                Book an Appointment!
                            </Text>
                        </TouchableOpacity>

                    </View >
            }
        </>
    )
}