import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, Dimensions, ScrollView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getTabNumber, changeTab } from '../Redux/Slices/TabsSlice';
import { Footer, FooterTab } from 'native-base';


import Tabs from '../NativeBase/Tabs';






export default function MainPage() {
    let currentTab = useSelector(getTabNumber);

    if (currentTab === '1')
        return (
            <View style={Styles.mainContainer}>
                <ScrollView style={Styles.bodyContainer}>
                    <Text>1</Text>
                </ScrollView>


                <View style={Styles.footerContainer}>
                    <Tabs />
                </View>
            </View>
        )
    else if (currentTab === '2')
        return (
            <View style={Styles.mainContainer}>
                <ScrollView style={Styles.bodyContainer}>
                    <Text>2</Text>
                </ScrollView>


                <View style={Styles.footerContainer}>
                    <Tabs />
                </View>
            </View>
        )
    else if (currentTab === '3') {
        return (
            <View style={Styles.mainContainer}>
                <ScrollView style={Styles.bodyContainer}>
                    <Text>3</Text>
                </ScrollView>


                <View style={Styles.footerContainer}>
                    <Tabs />
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1
    },
    bodyContainer: {
        display: 'flex',
        flex: 0.9,
        backgroundColor: '#F0F8FF'
    },
    footerContainer: {
        display: 'flex',
        flex: 0.1
    }
});