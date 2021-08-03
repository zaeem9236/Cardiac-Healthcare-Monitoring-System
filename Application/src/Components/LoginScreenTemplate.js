
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, Dimensions, TouchableOpacity, Keyboard, ImageBackground, StatusBar } from 'react-native';
import { Item, Label, Input, Icon, Button } from 'native-base';
import SvgIconFunction from '../Functions/SvgIconFunction';
import * as Animatable from 'react-native-animatable';
import LoginUser from '../Functions/LoginUser';





export default function LoginScreenTemplate({ navigation }) {
    let [credentials, setCredentials] = useState({ email: 'nayabssanam8@gmail.com', password: 'sanam@441' });
    let [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => { console.log('show'); setKeyboardOpen(true) });
        Keyboard.addListener('keyboardDidHide', () => { console.log('close'); setKeyboardOpen(false) });
    }, []);
    return (
        <View style={Styles.mainContainer}>
            <StatusBar
                animated={true}
                backgroundColor="#2bae66"
            />
            {/* <Animatable.View animation={myAnimations.fadeIn} delay={600} duration={1000} iterationCount={6}> */}
                <ImageBackground style={keyboardOpen === true ? Styles.topViewHide : Styles.topView} imageStyle={{ borderBottomLeftRadius: 3, borderBottomRightRadius: 3 }} source={require('../Assets/loginBackground.png')} >
                    <View style={Styles.brandView}>
                        <SvgIconFunction icon='healthCare' size={'22' * Dimensions.get('window').scale} />
                        <View><Text style={Styles.brandText}>Helthcare Monitoring System #2bae66</Text></View>
                    </View>
                </ImageBackground>
            {/* </Animatable.View> */}





            <View style={keyboardOpen !== true ? Styles.bottomView_K0 : Styles.bottomView_K1}>
                <View style={Styles.welcomeView}>
                    <Text style={Styles.welcomeText}>Welcome</Text>
                    <View style={Styles.registerAccount}>
                        <Text style={Styles.registerText1}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('RegisterUser') }}><Text style={Styles.registerText2}>Register</Text></TouchableOpacity>
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
                    <Button onPress={() => LoginUser(credentials, navigation)} style={Styles.button}>
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
        height: Dimensions.get('window').height / 2.9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topViewHide: {
        display: 'none'
    },
    brandView: {
        // backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
    },
    brandText: {
        color: 'white',
        paddingTop: 13 * Dimensions.get('window').scale,
        fontSize: 8 * Dimensions.get('window').scale
    },
    bottomView_K0: {
        // backgroundColor: 'orange',
        // height: Dimensions.get('window').height / 1.5,
        transform: [{ translateY: Dimensions.get('window').height / 13, }]
    },
    bottomView_K1: {
        transform: [{ translateY: Dimensions.get('window').height / 25, }]
    },
    welcomeText: {
        color: '#2ba366',
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
        borderBottomColor: '#2bae66'
    },
    inputFieldPass: {
        borderBottomColor: '#2bae66',
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
        backgroundColor: '#2bae66',
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

const myAnimations = {
    fadeIn: {
        0: {
            opacity: 0,
        },
        1: {
            opacity: 1,
        }
    },
}


