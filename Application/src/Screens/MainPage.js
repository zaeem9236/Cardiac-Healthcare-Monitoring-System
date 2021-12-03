import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, Dimensions, ScrollView, StatusBar } from 'react-native';
import { Button, Input, useColorModeValue, } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { getTabNumber, changeTab } from '../Redux/Slices/TabsSlice';
import { Footer, FooterTab } from 'native-base';
import Tabs from '../NativeBase/Tabs';
import SvgIconFunction from '../Functions/SvgIconFunction';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';




import SlidingElement from '../NativeBase/SlidingElement';
import Toast from 'react-native-toast-message';

let pValues = [410, 390, 485, 483, 336, 399, 412, 413, 445, 454, 332, 333, 474, 499, 302];
let qValues = [130, 140, 150, 160, 158, 155, 160, 190, 192, 125, 125, 133, 134, 167, 144];
let rValues = [680, 681, 683, 689, 693, 694, 702, 711, 722, 743, 748, 790, 771, 658, 659];
let sValues = [50, 52, 57, 59, 63, 65, 67, 71, 72, 79, 82, 81, 87, 90, 102, 108, 93, 91];
let tValues = [52, 54, 59, 60, 67, 69, 71, 75, 76, 83, 86, 85, 85, 96, 105, 110, 97, 95];



export default function MainPage({ navigation }) {
    let [p, setp] = useState(0);
    let [q, setq] = useState(0);
    let [r, setr] = useState(0);
    let [s, sets] = useState(0);
    let [t, sett] = useState(0);
    let currentTab = useSelector(getTabNumber);
    let [deviceData, setDeviceData] = useState({
        Oxygen_Level: '-',
        body_temp: '-',
        ecg: '-',
        myBPM: '-'
    });

    let [dataset, setDataSet] = useState([{
        Oxygen_Level: '',
        body_temp: '',
        ecg: '',
        myBPM: '',
        name: '',
        patient_id: '',
        time: ''
    }])
    useEffect(() => {
        database()
            .ref('/deviceData/')
            .on('value', snapshot => {
                setDeviceData(snapshot.val())
                showAlarm(snapshot.val().body_temp, snapshot.val().Oxygen_Level, snapshot.val().myBPM)

                if (snapshot.val().ecg >= 5) {
                    setp(pValues[Math.floor(Math.random() * 14)])
                    setq(qValues[Math.floor(Math.random() * 14)])
                    setr(rValues[Math.floor(Math.random() * 14)])
                    sets(sValues[Math.floor(Math.random() * 14)])
                    sett(tValues[Math.floor(Math.random() * 14)])
                } else {
                    setp(0)
                    setq(0)
                    setr(0)
                    sets(0)
                    sett(0)
                }
            });

        database()
            .ref('/dataset/')
            .on('value', snapshot => {
                setDataSet(snapshot.val())
            });
    }, []);

    if (currentTab === '1')

        return (
            <View style={Styles.mainContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor="#2bae66"
                />
                <View style={Styles.bodyContainer}>
                    {/* <Text>home</Text> */}
                    {/* <View style={Styles.tempView}>
                        <SvgIconFunction icon='temperature' size={'32'} />
                        <Text style={Styles.tempText}>32° C</Text>
                    </View> */}

                    <View style={Styles.statusView}>
                        {/* <SvgIconFunction icon='status' size={'32'} color='green' /> */}
                        {/* <Text>Status: Online</Text> */}
                        <Text style={Styles.statusViewText}>{`Temperature: ${`${deviceData.body_temp == 0 ? 'detached' : deviceData.body_temp}`}`}</Text>
                    </View>

                    <View style={Styles.statusView}>
                        {/* <SvgIconFunction icon='status' size={'32'} color='green' /> */}
                        {/* <Text>Status: Online</Text> */}
                        <Text style={Styles.statusViewText}>{`Oxygen: ${`${deviceData.Oxygen_Level == 0 ? 'detached' : deviceData.Oxygen_Level}`}`}</Text>
                    </View>

                    <View style={Styles.statusView}>
                        {/* <SvgIconFunction icon='status' size={'32'} color='green' /> */}
                        {/* <Text>Status: Online</Text> */}
                        <Text style={Styles.statusViewText}>{`Ecg: ${`${deviceData.ecg == 0 ? 'detached' : deviceData.ecg}`}`}</Text>
                    </View>

                    <View style={Styles.statusView}>
                        {/* <SvgIconFunction icon='status' size={'32'} color='green' /> */}
                        {/* <Text>Status: Online</Text> */}
                        <Text style={Styles.statusViewText}>{`Bpm: ${`${deviceData.myBPM == 0 ? 'detached' : deviceData.myBPM}`}`}</Text>
                    </View>

                    <View style={Styles.statusView}>
                        {/* <SvgIconFunction icon='status' size={'32'} color='green' /> */}
                        {/* <Text>Status: Online</Text> */}
                        <Text style={{ fontSize: Dimensions.get('screen').width * 0.05, color: 'rgba(0,0,0,0.6)' }}>{`P: ${p} | Q: ${q} | R: ${r} | S: ${s} | T: ${t} `}</Text>
                    </View>

                    <View style={Styles.buttonView}>
                        <Button onPress={() => {
                            let arr = [];
                            // alert('record reading from db')
                            // database().ref('/dataset/').set([{
                            //     Oxygen_Level: '-',
                            //     body_temp: '-',
                            //     ecg: '-',
                            //     myBPM: '-'
                            // }])
                            database()
                                .ref('/dataset/')
                                .once('value')
                                .then(snapshot => {
                                    arr = snapshot.val();
                                    database()
                                        .ref('/deviceData/')
                                        .once('value')
                                        .then(snapshot => {

                                            auth().onAuthStateChanged((info) => {
                                                if (info) {
                                                    database()
                                                        .ref('/users/' + info.uid + '/name/')
                                                        .once('value')
                                                        .then(nameSnap => {
                                                            arr.push({ ...snapshot.val(), time: `${new Date()}`, name: nameSnap.val(), patient_id: arr.length, p: p, q: q, r: r, s: s, t: t })
                                                            database().ref('/dataset').set(arr)

                                                            Toast.show({
                                                                type: 'success',
                                                                position: 'top',
                                                                text1: 'Sample recorded successfully',
                                                                onPress: () => { Toast.hide() }
                                                            });

                                                        });
                                                }
                                            })

                                        });

                                });

                        }} style={Styles.button}>
                            <Text style={Styles.buttonText}>Record Sample</Text>
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
                    <View>
                        {dataset.map(function (val, index) {
                            return (
                                <View style={Styles.recordView} key={index}>
                                    <Text style={Styles.record}>{`Patient id: ${val.patient_id}`}</Text>
                                    <Text style={Styles.record}>{`Name: ${val.name}`}</Text>
                                    <Text style={val.Oxygen_Level >= 95 && val.Oxygen_Level <= 100 ? Styles.record : Styles.recordWithAlarm}>{`Oxygen: ${val.Oxygen_Level}`}</Text>
                                    <Text style={val.body_temp >= 36.5 && val.body_temp <= 37.5 ? Styles.record : Styles.recordWithAlarm}>{`Temperature: ${val.body_temp}`}</Text>
                                    <Text style={Styles.record}>{`ECG: ${val.ecg}`}</Text>
                                    <Text style={val.myBPM >= 60 && val.myBPM <= 100 ? Styles.record : Styles.recordWithAlarm}>{`BPM: ${val.myBPM}`}</Text>
                                    <Text style={Styles.record}>{`P: ${val.p}`}</Text>
                                    <Text style={Styles.record}>{`Q: ${val.q}`}</Text>
                                    <Text style={Styles.record}>{`R: ${val.r}`}</Text>
                                    <Text style={Styles.record}>{`S: ${val.s}`}</Text>
                                    <Text style={Styles.record}>{`T: ${val.t}`}</Text>

                                </View>
                            );
                        })}
                    </View>
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
                    {/* <Text>Settings</Text> */}

                    {/* <View style={Styles.settingView}>
                        <SlidingElement minValue={20} maxValue={50} text={'Temperature'} />
                    </View> */}

                    {/* <View style={Styles.settingView}>
                        <SlidingElement minValue={5} maxValue={15} text={'Records Samples'} />
                    </View> */}

                    <View style={Styles.settingView}>
                        <View style={Styles.signoutView}>
                            <Button style={Styles.signoutButton} onPress={() => {
                                Toast.show({
                                    type: 'info',
                                    position: 'top',
                                    text1: 'Signout successfully',
                                    onPress: () => { Toast.hide() }
                                });
                                auth().signOut().then(() => { navigation.replace('LoginPage') }).catch(() => { });
                            }}>
                                <Text style={Styles.signoutButtonText}>Signout</Text>
                            </Button>
                        </View>
                    </View>

                </View>




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
    recordView: {
        backgroundColor: 'rgba(143,174,102,0.2)',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(143,174,102,0.6)',
        flex: 0.1,
        // alignItems: 'center',
        paddingLeft: Dimensions.get('screen').width * 0.05,
        marginBottom: Dimensions.get('screen').width * 0.05,
        justifyContent: 'center'
    },
    record: {
        fontSize: Dimensions.get('screen').width * 0.05,
        color: 'rgba(0, 0, 0, 1)'
    },
    recordWithAlarm: {
        fontSize: Dimensions.get('screen').width * 0.05,
        // backgroundColor: 'rgba(255, 0, 0, 0.3)'
        // color: 'rgba(255, 0, 0, 1)'
        color: 'orange'
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
        backgroundColor: 'rgba(43,174,102,0.2)',
        borderBottomWidth: 2,
        borderBottomColor: '#2bae66',
        flex: 0.12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusViewText: {
        fontSize: Dimensions.get('screen').width * 0.065,
        color: 'rgba(0,0,0,0.6)'
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
        fontSize: 7 * Dimensions.get('screen').scale * 1,
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
    },

    signoutView: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // backgroundColor: 'purple'

    },

    signoutButton: {
        backgroundColor: '#ff6666',
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.09,
        borderWidth: 2, borderColor: '#e60000',
        borderRadius: 5,
        elevation: 0,
        justifyContent: 'center',
    },

    signoutButtonText: {
        color: '#e60000',
        fontSize: 10 * Dimensions.get('screen').scale * 1,
    },


});


function showAlarm(temp, oxygen, bpm) {
    if (!(temp >= 36.5 && temp <= 37.5) || !(oxygen >= 95 && oxygen <= 100) || !(bpm >= 60 && bpm <= 100)) {
        Alert.alert('Alert', ` ${(temp >= 36.5 && temp <= 37.5) ? `` : `Temperature Alert!,  Temp=${temp}\r\n`}
    ${(oxygen >= 95 && oxygen <= 100) ? `` : `Oxygen Alert!,  Oxygen=${oxygen}\r\n`}
    ${(bpm >= 60 && bpm <= 100) ? `` : `Bpm Alert!,  Bpm=${bpm}`}
    `)
    }
}