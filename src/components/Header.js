import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { w, h } from 'react-native-responsiveness';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Header({ ...props }) {
    return (
        <View
            style={{
                width: w('100%'),
                height: h('7%'),
                backgroundColor: '#AD7D47',
                elevation: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View style={{ width: '20%' }}>
                <TouchableOpacity
                    style={{ marginLeft: 15 }}
                    onPress={props.onPress} >
                    <AntDesign name={props.nameicons} size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff', fontWeight: '700' }} >
                    {props.title}
                </Text>
            </View>
            {/* Right Side Icon */}
            <View style={{ width: '20%', right: 0 }}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20 }} onPress={props.rightonPress} >
                    <Fontisto name={"user-secret"} size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}