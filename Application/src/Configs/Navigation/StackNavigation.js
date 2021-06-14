import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../../Screens/LoginPage';
import RegisterUser from '../../Screens/RegisterUser';


const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage}  options={{ headerShown: false}} />
        <Stack.Screen name="RegisterUser" component={RegisterUser}    options={{ headerShown: false}}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
