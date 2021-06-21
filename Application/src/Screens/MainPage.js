import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getTabNumber, changeTab } from '../Redux/Slices/TabsSlice';

import Tab1 from '../Screens/Tab1';
import Tab2 from '../Screens/Tab2';
import Tab3 from '../Screens/Tab3';






export default function MainPage() {
    let currentTab = useSelector(getTabNumber);

    if (currentTab === '1')
        return (<Tab1 />)
    else if (currentTab === '2')
        return (<Tab2 />)
    else if (currentTab === '3') {
        return (<Tab3 />)
    }
}