
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, Keyboard } from 'react-native';
import { Item, Label, Input, Icon, Button } from 'native-base';





export default function LoginScreenTemplate() {
    let [credentials, setCredentials] = useState({ email: '', password: '' });
    let [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => { console.log('show'); setKeyboardOpen(true) });
        Keyboard.addListener('keyboardDidHide', () => { console.log('close'); setKeyboardOpen(false) });
    }, []);
    return (
        <View style={Styles.mainContainer}>
            <View style={keyboardOpen === true ? Styles.topViewHide : Styles.topView}>
                <View><Text>Brand Image</Text></View>
            </View>

            <View style={keyboardOpen !== true ? Styles.bottomView_K0 : Styles.bottomView_K1}>
                <View style={Styles.welcomeView}>
                    <Text style={Styles.welcomeText}>Welcome</Text>
                    <View style={Styles.registerAccount}>
                        <Text style={Styles.registerText1}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => { alert('register account') }}><Text style={Styles.registerText2}>Register</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={Styles.inputFieldsView}>
                    <Item floatingLabel style={Styles.inputFieldEmail}>
                        <Label>Email</Label>
                        <Input
                            onChangeText={(email) => { setCredentials({ ...credentials, email: email }) }}
                            value={credentials.email}
                            // placeholder='Email'
                            keyboardType='email-address'
                        // onFocus={() => { alert('d') }}
                        />
                        <Icon name="checkmark" style={Styles.inputFieldIcon} />
                    </Item>

                    <Item floatingLabel style={Styles.inputFieldPass}>
                        <Label>Password</Label>
                        <Input
                            onChangeText={(password) => { setCredentials({ ...credentials, password: password }) }}
                            value={credentials.password}
                            keyboardType='email-address'
                            keyboardType='default'
                            secureTextEntry={true}
                        />
                        <Icon name="lock-closed" style={Styles.inputFieldIcon}
                        // onPress={() => { setPasswordHide(!passwordHide) }}
                        />
                    </Item>
                </View>

                <View style={Styles.buttonView}>
                    <Button onPress={() => alert('login')} style={Styles.button}>
                        <Text style={Styles.buttonText}>Login</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({
    mainContainer: {
        height: Dimensions.get('window').height
    },
    topView: {
        backgroundColor: 'purple',
        height: Dimensions.get('window').height / 3.5,
        borderBottomStartRadius: 200,
        borderBottomEndRadius: 200,
        transform: [{ scale: 1.9 }],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topViewHide: {
        display: 'none'
    },
    bottomView_K0: {
        // backgroundColor: 'orange',
        // height: Dimensions.get('window').height / 1.5,
        transform: [{ translateY: Dimensions.get('window').height / 7, }]
    },
    bottomView_K1: {
        transform: [{ translateY: Dimensions.get('window').height / 25, }]
    },
    welcomeText: {
        color: 'purple',
        marginLeft: Dimensions.get('window').width * 0.07,
        fontSize: Dimensions.get('window').height * 0.05
    },
    registerAccount: {
        display: 'flex',
        flexDirection: 'row'
    },
    registerText1: {
        marginLeft: Dimensions.get('window').width * 0.07,
    },
    registerText2: {
        marginLeft: Dimensions.get('window').width * 0.01,
        color: 'red'
    },
    inputFieldsView: {
        // backgroundColor: 'orange',
        marginTop: Dimensions.get('window').height * 0.03,
        marginLeft: Dimensions.get('window').width * 0.07,
        marginRight: Dimensions.get('window').width * 0.07,
    },
    inputFieldEmail: {
        borderBottomColor: 'purple'
    },
    inputFieldPass: {
        borderBottomColor: 'purple',
        marginTop: Dimensions.get('window').height * 0.03,
    },
    inputFieldIcon: {

    },
    buttonView: {
        marginTop: Dimensions.get('window').height * 0.045,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: Dimensions.get('window').width / 2,
        backgroundColor: 'purple',
        // textAlign: 'center'    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }

});


