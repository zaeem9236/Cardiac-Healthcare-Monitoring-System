import React from 'react';
import { View, Text } from 'react-native';

import HealthCare from '../Assets/healthCare.svg';
import Home from '../Assets/home.svg';
import List from '../Assets/list.svg';
import Settings from '../Assets/settings.svg';


export default SvgIconFunction = (props) => {
  if (props.icon === 'healthCare') {
    return (
      <View>
        <HealthCare width={props.size} height={props.size} fill="#f2f2f2" />
      </View>
    )
  } else if (props.icon === 'home') {
    return (
      <View>
        <Home width={props.size} height={props.size} fill="#f2f2f2" />
      </View>
    )
  } else if (props.icon === 'list') {
    return (
      <View>
        <List width={props.size} height={props.size} fill="#f2f2f2" />
      </View>
    )
  } else if (props.icon === 'settings') {
    return (
      <View>
        <Settings width={props.size} height={props.size} fill="#f2f2f2" />
      </View>
    )
  }
};
