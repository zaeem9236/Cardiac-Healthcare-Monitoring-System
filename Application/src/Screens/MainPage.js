import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, Dimensions, ScrollView, StatusBar } from 'react-native';
import { Button, Input, useColorModeValue, } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { getTabNumber, changeTab } from '../Redux/Slices/TabsSlice';
import { Footer, FooterTab } from 'native-base';
import Tabs from '../NativeBase/Tabs';
import SvgIconFunction from '../Functions/SvgIconFunction';


import SlidingElement from '../NativeBase/SlidingElement';
import Toast from 'react-native-toast-message';




export default function MainPage() {

    let currentTab = useSelector(getTabNumber);

    if (currentTab === '1')

        return (
            <View style={Styles.mainContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor="#2bae66"
                />
                <View style={Styles.bodyContainer}>
                    <Text>home</Text>
                    <View style={Styles.tempView}>
                        <SvgIconFunction icon='temperature' size={'32'} />
                        <Text style={Styles.tempText}>32° C</Text>
                    </View>

                    <View style={Styles.statusView}>
                        <SvgIconFunction icon='status' size={'32'} color='green' />
                        <Text>Status: Online</Text>
                    </View>

                    <View style={Styles.buttonView}>
                        <Button onPress={() => {
                            alert('record reading from db')
                        }} style={Styles.button}>
                            <Text style={Styles.buttonText}>analyze health</Text>
                        </Button>
                    </View>

                </View>


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
                <View style={Styles.bodyContainer}>
                    <Text>Settings</Text>

                    <View style={Styles.settingView}>
                        {/* <Text>Temperature Alert</Text> */}
                        <SlidingElement minValue={20} maxValue={50} text={'Temperature'} />
                    </View>

                    <View style={Styles.settingView}>
                        {/* <Text>Records Samples</Text> */}
                        <SlidingElement minValue={5} maxValue={15} text={'Records Samples'} />
                    </View>
                </View>

                {/* <Button onPress={() => {
                    Toast.show({
                        type: 'info',
                        position: 'top',
                        text1: 'Hello',
                        onPress: () => {Toast.hide()}
                    });
                }}>
                    <Text>Check</Text>
                </Button> */}


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

    /* Temperature View styling */
    tempView: {
        // backgroundColor: 'red',
        borderWidth: 2, borderColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        // height: Dimensions.get('screen').height * 0.1,
        // flex: 0.1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: Dimensions.get('screen').width * 0.06,
    },
    tempText: {
        color: '#660000',
        paddingLeft: Dimensions.get('screen').width * 0.01,
        fontSize: 20,
        fontSize: 9 * Dimensions.get('screen').scale,
    },

    /* Status View styling */
    statusView: {
        backgroundColor: 'pink',
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    /* button View styling */
    buttonView: {
        // backgroundColor: 'blue',
        flex: 0.4,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    /* button styling */
    button: {
        backgroundColor: '#c1f0d5',
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.09,
        borderWidth: 2, borderColor: '#2bae66',
        borderRadius: 5,
        elevation: 0,
        justifyContent: 'center',

    },

    /* button Text styling */
    buttonText: {
        color: '#2bae66',
        fontSize: 10 * Dimensions.get('screen').scale * 1,
    },

    /* setting View styling */
    settingView: {
        backgroundColor: '#e6e6e6',
        flex: 0.25,
        borderBottomWidth: 3,
        borderBottomStartRadius: 7,
        borderBottomEndRadius: 7,
        borderBottomColor: 'orange',
        // paddingTop: 0.06 * Dimensions.get('screen').height
        // marginTop: 0.06 * Dimensions.get('screen').height
    }


});