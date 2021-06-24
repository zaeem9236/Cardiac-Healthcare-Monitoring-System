import React from 'react';
import { View, Text } from 'react-native';

import HealthCare from '../Assets/healthCare.svg';
import Home from '../Assets/home.svg';
import List from '../Assets/list.svg';
import Settings from '../Assets/settings.svg';
import Temp from '../Assets/tempIcon.svg';
import Status from '../Assets/status.svg';


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
  } else if (props.icon === 'temperature') {
    return (
      <View>
        <Temp width={props.size} height={props.size} fill="#660000" />
      </View>
    )
  } else if (props.icon === 'status') {
    return (
      <View>
        <Status width={props.size} height={props.size} fill={props.color} />
      </View>
    )
  }
};
