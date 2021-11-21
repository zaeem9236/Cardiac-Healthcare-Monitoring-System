import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert, Dimensions, Keyboard } from 'react-native';
import { Input, Item, Label, Icon, Button, Heading, NativeBaseProvider } from "native-base"

import SlidingElement from '../NativeBase/SlidingElement';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';




export default function RegisterUser({ navigation }) {
    let [register, setRegister] = useState(
        {
            name: '',
            email: '',
            contact: '',
            password: '',
            c_password: ''
        });


    let [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => { console.log('show'); setKeyboardOpen(true) });
        Keyboard.addListener('keyboardDidHide', () => { console.log('close'); setKeyboardOpen(false) });
    }, []);
    return (
        <View style={Styles.inputFieldsView}>

            <Item floatingLabel style={Styles.inputFieldName} >
                <Label>Name</Label>
                <Input
                    onChangeText={(name) => { setRegister({ ...register, name: name }) }}
                    value={register.name}
                    // placeholder='Email'
                    keyboardType='default'
                // onFocus={() => { alert('d') }}
                />
                <Icon name="person-circle-outline" style={Styles.inputFieldIcon} />
            </Item>

            <Item floatingLabel style={Styles.inputFieldEmail} >
                <Label>Email</Label>
                <Input
                    onChangeText={(email) => { setRegister({ ...register, email: email }) }}
                    value={register.email}
                    // placeholder='Email'
                    keyboardType='default'
                // onFocus={() => { alert('d') }}
                />
                <Icon name="mail-outline" style={Styles.inputFieldIcon} />
            </Item>

            <Item floatingLabel style={Styles.inputFieldContact} >
                <Label>Contact</Label>
                <Input
                    onChangeText={(contact) => { setRegister({ ...register, contact: contact }) }}
                    value={register.contact}
                    // placeholder='Email'
                    keyboardType='default'
                // onFocus={() => { alert('d') }}
                />
                <Icon name="ios-phone-portrait-outline" style={Styles.inputFieldIcon} />
            </Item>

            <Item floatingLabel style={Styles.inputFieldPassword} >
                <Label>Password</Label>
                <Input
                    onChangeText={(pass) => { setRegister({ ...register, password: pass }) }}
                    value={register.password}
                    // placeholder='Email'
                    keyboardType='default'
                    secureTextEntry={true}
                // onFocus={() => { alert('d') }}
                />
                <Icon name="key-outline" style={Styles.inputFieldIcon} />
            </Item>

            <Item floatingLabel style={Styles.inputFieldC_Password} >
                <Label>Confirm Password</Label>
                <Input
                    onChangeText={(c_pass) => { setRegister({ ...register, c_password: c_pass }) }}
                    value={register.c_password}
                    // placeholder='Email'
                    keyboardType='default'
                    secureTextEntry={true}
                // onFocus={() => { alert('d') }}
                />
                <Icon name="key-outline" style={Styles.inputFieldIcon} />
            </Item>

            <View style={Styles.bottomView} >
                <View style={Styles.registerButtonView} >
                    <Button style={keyboardOpen===true ? Styles.registerButtonHide : Styles.registerButton} onPress={() => {

                        // auth().signOut().then(() => { }).catch(() => { });

                        if (register.email !== '' && register.password !== '')
                            auth().createUserWithEmailAndPassword(register.email, register.password)
                                .then(function (firebaseUser) {
                                    Toast.show({
                                        type: 'success',
                                        position: 'top',
                                        text1: 'User Registered successfully',
                                        onPress: () => { Toast.hide() }
                                    });
                                    navigation.replace('MainPage');
                                    database().ref('/users/' + `${firebaseUser.user.uid}`).set(register)
                                        .then((data) => {
                                            // Alert.alert('job posted successfully')
                                        })
                                }).catch(function (error) {
                                    //   alert(error)
                                });
                    }}>
                        <Text style={Styles.registerButtonText}>Register</Text>
                    </Button>
                </View>
            </View>

        </View>

    )
}




const Styles = StyleSheet.create({

    inputFieldsView: {
        // backgroundColor: 'orange',
        marginTop: Dimensions.get('window').height * 0.03,
        marginLeft: Dimensions.get('window').width * 0.03,
        marginRight: Dimensions.get('window').width * 0.03,
        // height: Dimensions.get('screen').height * 0.5,
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
    },
    inputFieldName: {
        borderBottomColor: '#2bae66'
    },
    inputFieldEmail: {
        borderBottomColor: '#2bae66'
    },
    inputFieldContact: {
        borderBottomColor: '#2bae66'
    },
    inputFieldPassword: {
        borderBottomColor: '#2bae66'
    },
    inputFieldC_Password: {
        borderBottomColor: '#2bae66'
    },
    inputFieldIcon: {
        color: '#2bae66'
    },

    bottomView: {
        // backgroundColor: '#e6e6e6',
        flex: 0.75,
        // marginTop: Dimensions.get('window').height*0.4,
        // borderBottomWidth: 3,
        // borderBottomStartRadius: 7,
        // borderBottomEndRadius: 7,
        // borderBottomColor: 'orange',
        // paddingTop: 0.06 * Dimensions.get('screen').height
        // marginTop: 0.06 * Dimensions.get('screen').height
    },

    registerButtonView: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // backgroundColor: 'purple'

    },

    registerButton: {
        backgroundColor: '#94d4b1',
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.09,
        borderWidth: 2, borderColor: '#2bae66',
        borderRadius: 5,
        elevation: 0,
        justifyContent: 'center',
        transform: [{ translateY: Dimensions.get('screen').height * -0.1 }]
    },
    registerButtonHide:{
        display: 'none'
    },

    registerButtonText: {
        color: '#2bae66',
        fontSize: 10 * Dimensions.get('screen').scale * 1,
    },

});

