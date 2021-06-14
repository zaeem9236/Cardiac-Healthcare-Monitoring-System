  
import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import LoginScreenTemplate from '../Components/LoginScreenTemplate';




export default function LoginPage({navigation}){
//   props.navigation.setOptions({ tabBarVisible: false })
  
  
    return(
        <View>
            {/* <Text>LoginPage</Text> */}
            <LoginScreenTemplate navigation={navigation} />
        </View>
    )
}
