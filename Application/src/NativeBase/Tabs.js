import React, { useState } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { getTabNumber, changeTab } from '../Redux/Slices/TabsSlice';

import SvgIconFunction from '../Functions/SvgIconFunction';



export default function Tabs() {

    let dispatch = useDispatch();
    let tabNumber = useSelector(getTabNumber);

    return (
        <>
            <Container>

                <FooterTab style={{ backgroundColor: '#2bae66' }} >

                    <Button style={tabNumber === '1' ? Styles.selectedTab : Styles.tab} vertical onPress={() => { dispatch(changeTab('1')) }}>
                        <SvgIconFunction icon='home' size={'22'} />
                        <Text style={Styles.tabText}>Home</Text>
                    </Button>

                    <Button style={tabNumber === '2' ? Styles.selectedTab : Styles.tab} vertical onPress={() => { dispatch(changeTab('2')) }}>
                        <SvgIconFunction icon='list' size={'22'} />
                        <Text style={Styles.tabText}>Records</Text>
                    </Button>

                    <Button style={tabNumber === '3' ? Styles.selectedTab : Styles.tab} vertical onPress={() => { dispatch(changeTab('3')) }}>
                        <SvgIconFunction icon='settings' size={'22'} />
                        <Text style={Styles.tabText}>Settings</Text>
                    </Button>


                </FooterTab>
                {/* </Footer> */}
            </Container>
        </>
    );

}


const Styles = StyleSheet.create({
    mainFooter_cold: {
        backgroundColor: 'rgb(102, 179, 255)',
    },
    mainFooter_hot: {
        backgroundColor: 'rgb(255, 140, 26)',
    },
    tab: {
        opacity: 0.3,
    },
    selectedTab: {
        opacity: 1
    },
    tabText: {
        color: 'white',
        paddingTop: 3
    }
});