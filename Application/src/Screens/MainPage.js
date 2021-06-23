import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, Dimensions, ScrollView, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getTabNumber, changeTab } from '../Redux/Slices/TabsSlice';
import { Footer, FooterTab } from 'native-base';
import Tabs from '../NativeBase/Tabs';
import SvgIconFunction from '../Functions/SvgIconFunction';






export default function MainPage() {

    let currentTab = useSelector(getTabNumber);

    if (currentTab === '1')

        return (
            <View style={Styles.mainContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor="#2bae66"
                />
                <ScrollView style={Styles.bodyContainer}>
                    <View style={Styles.tempView}>
                        <SvgIconFunction icon='temperature' size={'32'} />
                        <Text style={Styles.tempText}>32° C</Text>
                    </View>

                    <View style={Styles.statusView}>
                        <Text>Status</Text>
                    </View>

                </ScrollView>


                <View style={Styles.footerContainer}>
                    <Tabs />
                </View>
            </View>
        )
    else if (currentTab === '2')
        return (
            <View style={Styles.mainContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor="#2bae66"
                />
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
                <StatusBar
                    animated={true}
                    backgroundColor="#2bae66"
                />
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
    /* Tabs general styling */
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
    },

    /* Home tab styling */
    tempView: {
        // backgroundColor: 'red',
        borderWidth: 2,borderColor: 'red',
        display:'flex',
        flexDirection: 'row',
        height: Dimensions.get('screen').height * 0.1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: Dimensions.get('screen').width * 0.06,
    },
    tempText: {
        color: '#660000',
        paddingLeft: Dimensions.get('screen').width * 0.01,
        fontSize: 20,
        fontSize: 9* Dimensions.get('screen').scale,
    }

});